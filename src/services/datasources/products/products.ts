import sortBy from 'lodash/sortBy';

import { NotFound } from '@common/exceptions/notFound.ts';
import { ValidationError } from '@common/exceptions/validation.ts';

import { normalizeDate } from '@utils/dates';

import { ListMemoryStorage } from './storages/listMemoryStorage';
import { DetailsResponse } from './typings/detailsResponse';
import { Product } from './typings/product';

interface IProductsDataSourceImpl {
	getList(): Promise<Product[]>;
	getFactoryDetails(
		factoryId: string,
		monthId: string
	): Promise<DetailsResponse>;
}

export class ProductsDataSourceImpl implements IProductsDataSourceImpl {
	constructor(private readonly storage: ListMemoryStorage) {}

	async getList() {
		return this.getJson();
	}

	async getFactoryDetails(factoryId: string, monthId: string) {
		const response = await this.getJson();

		if (!Number(monthId) || +monthId < 1 || +monthId > 12) {
			throw new ValidationError('Wrong month value');
		}

		const currentProduct = response.find(
			product => String(product.factory_id) === factoryId
		);

		if (!currentProduct) {
			throw new NotFound('Product not found');
		}

		const products = response.filter(product => {
			return (
				String(product.factory_id) === factoryId &&
				monthId === String(new Date(product.date as string).getMonth() + 1)
			);
		});

		return {
			products,
			factory_id: currentProduct.factory_id
		};
	}

	private async getJson(): Promise<Product[]> {
		if (!this.storage.size) {
			const response = await fetch(
				`${import.meta.env.VITE_APP_API_URL}/products`
			);
			const json = (await response.json()) as Product[];

			this.storage.set(
				sortBy(
					json
						.map(product => ({
							...product,
							date: product.date
								? normalizeDate(product.date).toISOString()
								: null
						}))
						.filter(product => !!product?.date),
					'date'
				)
			);
		}

		return this.storage.list;
	}
}
