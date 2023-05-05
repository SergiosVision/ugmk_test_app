export const formatFactoryIdToString = (value: NumberOrNull) => {
	switch (value) {
		case 1:
			return 'А';
		case 2:
			return 'Б';
		default:
			return 'Unknown';
	}
};
