/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				base: '#ffffff',
				primary: '#FF7652',
				purple: '#6C4ECF',
				background: '#1f1d2b',
				backgroundSecondary: '#424244'
			},
			boxShadow: {
				DEFAULT: '0 3px 12px rgba(0, 0, 0, 0.6)',
				md: '0 3px 12px rgba(0, 0, 0, 0.1)'
			},
			fontSize: {
				xs: '.9rem',
				sm: '1rem',
				tiny: '1.2rem',
				base: '1.4rem',
				lg: '1.5rem',
				xl: '1.6rem',
				'2xl': '1.75rem',
				'3xl': '1.9rem',
				'4xl': '2.4rem',
				'5xl': '3.5rem',
				'6xl': '4.5rem',
				'7xl': '5.5rem'
			}
		}
	},
	plugins: []
};
