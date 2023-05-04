import { ProductsRepositoryImpl } from '../../data/repository.ts';

export class GetFactoryDetailsCase {
	constructor(private readonly repository: ProductsRepositoryImpl) {}

	async execute(factoryId: string, monthId: string) {
		return this.repository.getDetails(factoryId, monthId);
	}
}
