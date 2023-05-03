import { ProductsRepositoryImpl } from '../../data/repository.ts';
import { ProductType } from '../../typings/productType';

export class GetProductsListCase {
	constructor(private readonly repository: ProductsRepositoryImpl) {}

	async execute(productType?: ProductType) {
		return this.repository.getList(productType);
	}
}
