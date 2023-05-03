import { normalizeDate } from '@utils/dates.ts';

import { ListStorageService } from './storages/list.storage.service.ts';
import { DetailsResponse } from './typings/detailsResponse.ts';
import { ListResponse } from './typings/listResponse.ts';
import { Product } from './typings/product.ts';

interface IProductsDataSourceImpl {
	getList(): Promise<Product[]>;
	getDetails(fabricId: string, monthId: string): Promise<DetailsResponse>;
}

export class ProductsDataSourceImpl implements IProductsDataSourceImpl {
	constructor(private readonly storage: ListStorageService) {}

	async getList() {
		return this.getJson();
	}

	async getDetails(fabricId: string, monthId: string) {
		const response = await this.getJson();

		if (+monthId < 1 || +monthId > 12) {
			throw new Error('Wrong month value');
		}

		const currentProduct = response.find(
			product => String(product.factory_id) === fabricId
		);

		if (!currentProduct) {
			throw new Error('Product not found');
		}

		const products = response.filter(product => {
			if (product.date) {
				return (
					String(product.factory_id) === fabricId &&
					monthId === String(normalizeDate(product.date).getMonth() + 1)
				);
			}
		});

		return {
			products,
			factoryId: currentProduct.factory_id
		};
	}

	private async getJson(): Promise<Product[]> {
		if (this.storage.size) {
			return this.storage.list;
		}

		const response = await fetch('/json/products.json');
		const json = (await response.json()) as ListResponse;

		this.storage.set(json.products.filter(product => !!product?.date));

		return this.storage.list;
	}
}
