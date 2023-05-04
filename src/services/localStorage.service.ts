import { StorageAbstractionService } from './abstractions/storageAbstraction.service.ts';

export class LocalStorageService extends StorageAbstractionService {
	get(key: string) {
		return localStorage.getItem(key);
	}

	set(key: string, value) {
		localStorage.setItem(key, value);
	}

	delete(key: string) {
		localStorage.removeItem(key);
	}
}

const localStorageService = new LocalStorageService();

export default localStorageService;
