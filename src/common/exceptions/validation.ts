import { ApplicationException } from './application';

export class ValidationError extends ApplicationException {}

export class ModelSchemaValidationError extends ApplicationException {
	constructor() {
		super('Model schema is not defined');
	}
}

export class ModelValueValidationError extends ApplicationException {
	constructor() {
		super('Model filed validation error');
	}
}
