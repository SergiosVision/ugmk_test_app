import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { StorageAbstractionService } from '@services/abstractions/storageAbstraction.service.ts';

import { ProductListModel } from '@modules/products/domain/models/ProductListModel';
import { GetProductsListCase } from '@modules/products/domain/usecases/getProductsList';
import { ProductType } from '@modules/products/typings/productType';

type UseCases = {
	getProductsListCase: GetProductsListCase;
};

const FILTER_KEY = 'product-type';

export class ProductsViewModel {
	private _list: ProductListModel[] = [];
	private _isLoading = false;
	private _productType: ProductType = ProductType.ALL;

	constructor(
		private readonly useCases: UseCases,
		private readonly storage: StorageAbstractionService
	) {
		makeAutoObservable(this);

		this.initFilterValue();
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
		this.clearData();

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

			this.setFilterValueInLocalStorage();

			await this.getList();
		}
	}

	private setFilterValueInLocalStorage() {
		if (this.storage.get(FILTER_KEY) !== this._productType) {
			this.storage.set(FILTER_KEY, this._productType);
		}
	}

	private initFilterValue() {
		const value = this.storage.get(FILTER_KEY) as ValueOrNull<ProductType>;

		if (value) {
			this._productType = !Object.values(ProductType).includes(value)
				? ProductType.ALL
				: value;
		} else {
			this._productType = ProductType.ALL;

			this.setFilterValueInLocalStorage();
		}
	}

	private clearData() {
		if (this._isLoading) {
			this._isLoading = false;
		}

		if (this._list.length) {
			this._list = [];
		}
	}
}
