export abstract class StorageAbstractionService {
	abstract get(key: string): StringOrNull;
	abstract set(key: string, value: string): void;
	abstract delete(key: string): void;
}
