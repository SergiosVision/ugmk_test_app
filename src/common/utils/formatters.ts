export const formatKgToTons = (value: NumberOrNull) => {
	return Math.floor((value || 0) / 1000);
};

export const formatMothValueToString = (
	value: ValueOrNull<string | number>
) => {
	if (!value) {
		return 'Unknown';
	}

	const date = new Date();

	date.setMonth((typeof value === 'string' ? +value : value) - 1);

	return date.toLocaleDateString('en-US', { month: 'short' });
};
