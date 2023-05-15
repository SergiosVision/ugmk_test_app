import { ApplicationException } from './application';

export class ValidationError extends ApplicationException {}

export class ModelSchemaValidationError extends ApplicationException {
	constructor() {
		super('Схема модели не определена');
	}
}

export class ModelValueValidationError extends ApplicationException {
	constructor() {
		super('Ошибка проверки поля модели');
	}
}
