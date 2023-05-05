import { NotFound } from '@common/exceptions/notFound';
import { ValidationError } from '@common/exceptions/validation';

import { ProductsDataSourceImpl } from '@services/datasources/products/products';

import { FactoryDefaultError } from '@modules/products/exceptions/factoryDefaultError';
import { FactoryNotFound } from '@modules/products/exceptions/factoryNotFound';
import { FactoryValidationError } from '@modules/products/exceptions/factoryValidationError';
import { ProductsDefaultError } from '@modules/products/exceptions/productsDefaultError';

import { FactoryDetailsModel } from '../domain/models/FactoryDetailsModel';
import { ProductListModel } from '../domain/models/ProductListModel';
import { ProductType } from '../typings/productType';
import { getSumOfProductsByType } from '../utils/getSumOfProductsByType';

interface IRepositoriesRepositoryImpl {
	getList(productType?: ProductType): Promise<ProductListModel[]>;
	getDetails(factoryId: string, monthId: string): Promise<FactoryDetailsModel>;
}

export class ProductsRepositoryImpl implements IRepositoriesRepositoryImpl {
	constructor(private readonly dataSource: ProductsDataSourceImpl) {}

	async getList(productType?: ProductType) {
		try {
			const response = await this.dataSource.getList();

			return response.map(
				product =>
					new ProductListModel({
						id: product.id,
						factory_id: product.factory_id,
						date: product.date,
						product_weight: getSumOfProductsByType(
							{
								product_1: product.product1 || 0,
								product_2: product.product2 || 0
							},
							productType
						)
					})
			);
		} catch (error) {
			throw new ProductsDefaultError(
				'Cannot get list of products. Try again later'
			);
		}
	}

	async getDetails(factoryId: string, monthId: string) {
		try {
			const response = await this.dataSource.getFactoryDetails(
				factoryId,
				monthId
			);

			return new FactoryDetailsModel({
				factory_id: response.factory_id,
				products: response.products
			});
		} catch (error) {
			if (error instanceof ValidationError) {
				throw new FactoryValidationError(error.message);
			}

			if (error instanceof NotFound) {
				throw new FactoryNotFound(error.message);
			}

			throw new FactoryDefaultError(
				'Cannot get details of factory. Try again later'
			);
		}
	}
}
