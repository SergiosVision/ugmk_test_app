export class ListStorageService {
	private static _instance: ListStorageService;
	private _list: List = [];

	public static getInstance(): ListStorageService {
		if (!ListStorageService._instance) {
			ListStorageService._instance = new ListStorageService();
		}

		return ListStorageService._instance;
	}

	get list() {
		return this._list;
	}

	set(list: List) {
		if (Array.isArray(list)) {
			this._list = list;
		}
	}

	get size() {
		return this._list.length;
	}
}

export const ListStorage = ListStorageService.getInstance();
