import { SkillDatas, WorkDatas } from './types';



export const localStorageKeys = {
	displayMode: 'display-mode'
}


export const years = ['2022', '2021', '2020'] as const

export const workDatas: WorkDatas = {
	2022: [
		{
			title: 'Linux Like Console Application',
			image: '/assets/images/2022/linux.png',
			app: 'https://github.com/bazarkua/smallsh'
		},
	],
	2021: [
		{
			title: 'Dog Breeds Dashboard',
			image: '/assets/images/2021/dogs.png',
			app: 'https://github.com/bazarkua/dogs-app'
		},
		{
			title: 'Rental Cars Database',
			image: '/assets/images/2021/carworms.png',
			app: 'https://github.com/bazarkua/car-worms-new'
		},
		
	],
	2020: [
		{
			title: 'Wumpus C++ Console Game',
			image: '/assets/images/2020/wumpus.svg',
			app: 'https://github.com/bazarkua/Hunt-the-wumpus-console-game'
		},
		{
			title: 'Pizza Portal C++ Console Application',
			image: '/assets/images/2020/pizza.webp',
			app: 'https://github.com/bazarkua/pizza-portal'
		},
	]
}

export const skillCategories = ['All', 'Active'] as const

export const skillDatas: SkillDatas = {
	languages: [
		{ name: 'Python', iconName: 'python', experience: '2 years', isActive: true },
		{ name: 'C++', iconName: 'c++', experience: '3 years', isActive: true },
		{ name: 'C', iconName: 'c', experience: '1 year', isActive: true },
		{ name: 'JavaScript', iconName: 'javascript', experience: '1 year', isActive: true },
		{ name: 'TypeScript', iconName: 'typescript', experience: '3 months', isActive: true },
	],
	frameworks: [
		{ name: 'React', iconName: 'react', experience: '1 year', isActive: true },
		{ name: 'Vue', iconName: 'vue', experience: '3 months', isActive: false },
		{ name: 'Next.js', iconName: 'nextjs', experience: '1 year', isActive: true },
		{ name: 'Three.js', iconName: 'three', experience: '6 months', isActive: true },
		{ name: 'Node.js', iconName: 'nodejs', experience: '1 year', isActive: true },
		{ name: 'Express', iconName: 'express', experience: '6 months', isActive: true },
		{ name: 'SCSS', iconName: 'scss', experience: '1 year', isActive: true },
		{ name: 'MUI', iconName: 'mui', experience: '1 year', isActive: true },
		{ name: 'Firebase', iconName: 'firebase', experience: '3 months', isActive: false },
		{ name: 'Heroku', iconName: 'heroku', experience: '6 mounths', isActive: true },
		{ name: 'HTML5', iconName: 'html', experience: '3 year', isActive: true },
		{ name: 'CSS3', iconName: 'css', experience: '3 year', isActive: true },
		{ name: 'Bootstrap5', iconName: 'bootstrap', experience: '1 year', isActive: true }
	],
	developmentTools: [
		{ name: 'VSCode', iconName: 'vscode', experience: '3 years', isActive: true },
		{ name: 'GitHub', iconName: 'github', experience: '3 years', isActive: true },
		{ name: 'Figma', iconName: 'figma', experience: '6 months', isActive: true },
		{ name: 'Blender', iconName: 'blender', experience: '6 months', isActive: false },
		{ name: 'WebStrom', iconName: 'webstorm', experience: '1 year', isActive: true },
		{ name: 'Pycharm', iconName: 'pycharm', experience: '6 months', isActive: true },
		{ name: 'Rstudio', iconName: 'rstudio', experience: '6 months', isActive: false }
	]
}
