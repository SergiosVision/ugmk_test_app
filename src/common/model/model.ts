import merge from 'lodash/merge';
import { ObjectSchema, object } from 'yup';

import {
	ModelSchemaValidationError,
	ModelValueValidationError
} from '@common/exceptions/validation';

// import { KeyValue } from '@common/types/interfaces/common';

export class Model {
	constructor(attributes: KeyValue) {
		this.validate(attributes).then(result => this.mergeValues(result));
	}

	private mergeValues(attributes: KeyValue = {}) {
		merge(this, attributes);
	}

	private validate(attributes: KeyValue) {
		const schema = this.getSchema();

		if (!schema) {
			throw new ModelSchemaValidationError();
		}

		try {
			const result = schema.validateSync(attributes, { abortEarly: true });

			return new Promise<KeyValue>(resolve => resolve(result));
		} catch (e) {
			throw new ModelValueValidationError();
		}
	}

	getSchema(): ObjectSchema<{}> {
		return object().shape({});
	}
}
