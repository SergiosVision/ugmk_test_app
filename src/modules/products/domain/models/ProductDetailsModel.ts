import { number, object, string } from 'yup';

import { Model } from '@common/model/model';

export class ProductDetailsModel extends Model {
	id: NumberOrNull = null;
	factory_id: NumberOrNull = null;
	date: StringOrNull = null;
	product1: NumberOrNull = null;
	product2: NumberOrNull = null;
	product3: NumberOrNull = null;

	static getSchema() {
		return object().shape({
			id: number(),
			factory_id: number(),
			date: string().nullable(),
			product1: number().nullable(),
			product2: number().nullable(),
			product3: number().nullable()
		});
	}
}
