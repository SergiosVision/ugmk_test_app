import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { FactoryDetailsModel } from '@modules/products/domain/models/FactoryDetailsModel';
import { GetFactoryDetailsCase } from '@modules/products/domain/usecases/getFactoryDetails';

type UseCases = {
	getFactoryDetailsCase: GetFactoryDetailsCase;
};

export class FactoryDetailsViewModel {
	private _data: FactoryDetailsModel = new FactoryDetailsModel({});
	private _isLoading = true;
	private _error: any = null;

	constructor(private readonly useCases: UseCases) {
		makeAutoObservable(this);
	}

	get data() {
		return toJS(this._data);
	}

	get isLoading() {
		return toJS(this._isLoading);
	}

	get error() {
		return toJS(this._error);
	}

	setError(error: any) {
		this._error = error;
	}

	async getDetails(factoryId: string, monthId: string) {
		this.clearData();

		if (!this._isLoading) {
			this._isLoading = true;
		}

		try {
			const response = await this.useCases.getFactoryDetailsCase.execute(
				factoryId,
				monthId
			);

			runInAction(() => {
				this._data = response;
			});
		} catch (error) {
			this._error = error;

			throw error;
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
