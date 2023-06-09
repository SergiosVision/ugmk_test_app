import { NotFound } from '@common/exceptions/notFound';
import { ValidationError } from '@common/exceptions/validation';

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
			throw new ValidationError('Месяц указан неверно');
		}

		const foundFactory = response.find(
			product => String(product.factory_id) === factoryId
		);

		if (!foundFactory) {
			throw new NotFound('Фабрика не найдена');
		}

		const products = response.filter(product => {
			return (
				String(product.factory_id) === factoryId &&
				monthId === String(new Date(product.date as string).getMonth() + 1)
			);
		});

		return {
			products,
			factory_id: foundFactory.factory_id
		};
	}

	private async getJson(): Promise<Product[]> {
		if (!this.storage.size) {
			const response = await fetch('http://localhost:3001/products');
			const json = (await response.json()) as Product[];

			this.storage.set(
				json
					.map(product => ({
						...product,
						date: product.date
							? normalizeDate(product.date).toISOString()
							: null
					}))
					.filter(product => !!product?.date)
			);
		}

		return this.storage.list;
	}
}
