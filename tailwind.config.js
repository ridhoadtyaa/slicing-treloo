module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		container: {
			screens: {
				sm: '100%',
				md: '100%',
				lg: '1024px',
				xl: '1280px',
			},
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				hero: "url('/src/assets/img/hero.png')",
				earth: 'url("/src/assets/img/earth.png")',
			},
		},
	},
	plugins: [],
};
