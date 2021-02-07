let screenWidth = window.innerWidth;
let rightBoxWidth = screenWidth * 0.8;
if (screenWidth > 1300) {
	rightBoxWidth /= 2;
}

export default {
	canvasSize: rightBoxWidth,
	navbarRadius: rightBoxWidth * 0.36,
	selectedRadius: rightBoxWidth * 0.22,
	optionRadius: rightBoxWidth * 0.05,
	boundaryRandomness: 0.2,
	options: [{
		name: 'Bootstrap',
		icon: './assets/bootstrap.svg',
		color: '#563d7c',
		knowledge: 95
	}, {
		name: 'C',
		icon: './assets/c.svg',
		color: '#03599c',
		knowledge: 80
	}, {
		name: 'C++',
		icon: './assets/cplusplus.svg',
		color: '#004482',
		knowledge: 90
	}, {
		name: 'CSS',
		icon: './assets/css3.svg',
		color: '#0170ba',
		knowledge: 95
	}, {
		name: 'Firebase',
		icon: './assets/firebase.svg',
		color: '#f5820b',
		knowledge: 80
	}, {
		name: 'HTML',
		icon: './assets/html5.svg',
		color: '#e34c26',
		knowledge: 100
	}, {
		name: 'Javascript',
		icon: './assets/javascript.svg',
		color: '#f5de19',
		knowledge: 90
	}, {
		name: 'Jquery',
		icon: './assets/jquery.svg',
		color: '#1169ad',
		knowledge: 40
	}, {
		name: 'MongoDB',
		icon: './assets/mongodb.svg',
		color: '#449a45',
		knowledge: 70
	}, {
		name: 'NodeJS',
		icon: './assets/node-dot-js.svg',
		color: '#77b063',
		knowledge: 85
	}, {
		name: 'Python',
		icon: './assets/python.svg',
		color: '#417bc4',
		knowledge: 80
	}, {
		name: 'ReactJS',
		icon: './assets/react.svg',
		color: '#53c1de',
		knowledge: 90
	}, {
		name: 'ESLint',
		icon: './assets/eslint.svg',
		color: '#4b32c3',
		knowledge: 75
	}]
};
