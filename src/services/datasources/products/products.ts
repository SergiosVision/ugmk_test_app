import { NotFound } from '@common/exceptions/notFound.ts';
import { ValidationError } from '@common/exceptions/validation.ts';

import { normalizeDate } from '@utils/dates';

import { ListStorageService } from './storages/list.storage.service';
import { DetailsResponse } from './typings/detailsResponse';
import { ListResponse } from './typings/listResponse';
import { Product } from './typings/product';

interface IProductsDataSourceImpl {
	getList(): Promise<Product[]>;
	getFactoryDetails(
		factoryId: string,
		monthId: string
	): Promise<DetailsResponse>;
}

export class ProductsDataSourceImpl implements IProductsDataSourceImpl {
	constructor(private readonly storage: ListStorageService) {}

	async getList() {
		return this.getJson();
	}

	async getFactoryDetails(factoryId: string, monthId: string) {
		const response = await this.getJson();

		if (+monthId < 1 || +monthId > 12) {
			throw new ValidationError('Wrong month value');
		}

		const currentProduct = response.find(
			product => String(product.factory_id) === factoryId
		);

		if (!currentProduct) {
			throw new NotFound('Product not found');
		}

		const products = response.filter(product => {
			if (product.date) {
				return (
					String(product.factory_id) === factoryId &&
					monthId === String(normalizeDate(product.date).getMonth() + 1)
				);
			}
		});

		return {
			products,
			factory_id: currentProduct.factory_id
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
