/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'very-dark-blue': 'hsl(212, 21%, 14%)',
				'dark-grayish-blue': 'hsl(228, 12%, 48%)',
				'Dark-cyan': 'hsl(158, 36%, 37%)',
				Cream: 'hsl(30, 38%, 92%)',
			},
			fontFamily: {
				Fraunces: ['Fraunces', 'serif'],
				Montserrat: ['Montserrat', 'sans-serif'],
			},
		},
		screens: {
			md: '376px',
		},
	},
	plugins: [],
};
