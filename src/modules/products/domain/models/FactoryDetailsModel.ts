import { array, number, object } from 'yup';

import { Model } from '@common/model/model.ts';

import { ProductDetailsModel } from './ProductDetailsModel.ts';

export class FactoryDetailsModel extends Model {
	factory_id: NumberOrNull = null;
	products: ProductDetailsModel[] = [];

	getSchema() {
		return object().shape({
			factory_id: number(),
			products: array().of(ProductDetailsModel.getSchema())
		});
	}
}
