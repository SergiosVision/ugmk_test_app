export const formatKgToTons = (value: NumberOrNull) => {
	if (!value) return 0;

	return value / 1000;
};

export const formatMothValueToString = (
	value: ValueOrNull<string | number>
) => {
	if (!value) {
		return 'Unknown';
	}

	const date = new Date();

	date.setMonth((typeof value === 'string' ? +value : value) - 1);

	return date.toLocaleDateString('ru-RU', { month: 'short' });
};
