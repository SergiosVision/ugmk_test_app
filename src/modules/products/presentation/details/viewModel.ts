import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { FactoryDetailsModel } from '../../domain/models/FactoryDetailsModel';
import { GetFactoryDetailsCase } from '../../domain/usecases/getFactoryDetails';

type UseCases = {
	getFactoryDetailsCase: GetFactoryDetailsCase;
};

export class FactoryDetailsViewModel {
	private _data: FactoryDetailsModel = new FactoryDetailsModel({});
	private _isLoading = false;

	constructor(private readonly useCases: UseCases) {
		makeAutoObservable(this);
	}

	get data() {
		return toJS(this._data);
	}

	get isLoading() {
		return toJS(this._isLoading);
	}

	async getDetails(factoryId: string, monthId: string) {
		this.clearData();

		this._isLoading = true;

		try {
			const response = await this.useCases.getFactoryDetailsCase.execute(
				factoryId,
				monthId
			);

			runInAction(() => {
				this._data = response;
			});
		} finally {
			runInAction(() => {
				this._isLoading = false;
			});
		}
	}

	private clearData() {
		if (this._isLoading) {
			this._isLoading = false;
		}

		if (this._data.factory_id) {
			this._data.factory_id = null;
			this._data.products = [];
		}
	}
}
