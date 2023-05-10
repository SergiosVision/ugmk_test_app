export class ListMemoryStorage {
	private static _instance: ListMemoryStorage;
	private _list: List = [];

	public static getInstance(): ListMemoryStorage {
		if (!ListMemoryStorage._instance) {
			ListMemoryStorage._instance = new ListMemoryStorage();
		}

		return ListMemoryStorage._instance;
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

export const ListStorage = ListMemoryStorage.getInstance();
