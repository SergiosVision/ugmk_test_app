import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { ProductListModel } from '../../domain/models/ProductListModel';
import { GetProductsListCase } from '../../domain/usecases/getProductsList';
import { ProductType } from '../../typings/productType';

type UseCases = {
	getProductsListCase: GetProductsListCase;
};

export class ProductsViewModel {
	private _list: ProductListModel[] = [];
	private _isLoading = false;
	private _productType: ProductType = ProductType.ALL;

	constructor(private readonly useCases: UseCases) {
		makeAutoObservable(this);
	}

	get list() {
		return toJS(this._list);
	}

	get isLoading() {
		return toJS(this._isLoading);
	}

	get productType() {
		return toJS(this._productType);
	}

	async getList() {
		this._isLoading = true;

		try {
			const response = await this.useCases.getProductsListCase.execute(
				this._productType
			);

			runInAction(() => {
				this._list = response;
			});
		} finally {
			runInAction(() => {
				this._isLoading = false;
			});
		}
	}

	async changeFilter(type: ProductType) {
		if (this._productType !== type) {
			this._productType = type;

			await this.getList();
		}
	}
}
