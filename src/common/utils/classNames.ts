import compact from 'lodash/compact'

const classNames = (...args: (string | undefined | null)[]): string => {
	return compact(args).join(' ')
}

export default classNames
