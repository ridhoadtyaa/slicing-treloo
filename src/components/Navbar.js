import { useEffect, useState } from 'react';
import NavItem from './NavItem';

export default function Navbar() {
	const [colorChange, setColorChange] = useState(false);
	const [navbarMobile, setNavbarMobile] = useState(false);

	const changeNavbarColorWhenScroll = () => {
		if (window.scrollY > window.innerHeight - 250) {
			setColorChange(true);
		} else {
			setColorChange(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNavbarColorWhenScroll);
		return () => {
			window.removeEventListener('scroll', changeNavbarColorWhenScroll);
		};
	}, []);

	return (
		<nav className="fixed z-20 w-full bg-opacity-30 px-10 py-5 backdrop-blur-lg backdrop-filter">
			<div className="container mx-auto flex items-center justify-between">
				<a href="/">
					<div className={`text-4xl font-medium md:text-5xl ${colorChange ? 'text-black' : 'text-white'}`}>Treloo</div>
				</a>
				{/* prettier-ignore */}
				<svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 block md:hidden cursor-pointer ${colorChange ? 'text-black' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setNavbarMobile(!navbarMobile)}>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
				</svg>
				<div
					className={`fixed inset-y-0 ${
						navbarMobile ? 'right-0' : '-right-full'
					} z-20 h-screen w-2/3 bg-blue-600 transition-all duration-300 md:static md:h-auto md:bg-transparent`}
				>
					{/* prettier-ignore */}
					<button className='absolute right-8 top-5 block md:hidden'>
					<svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10`} fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setNavbarMobile(false)}>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
					</button>
					<ul
						className={`flex h-full flex-col items-center justify-evenly text-xl font-medium md:h-auto md:flex-row md:items-stretch md:justify-end md:space-x-8 ${
							colorChange ? 'text-black' : 'text-white'
						} ${navbarMobile && '!text-white'}`}
					>
						<NavItem href="/#">Review</NavItem>
						<NavItem href="/#">Tips</NavItem>
						<NavItem href="/#">Alert</NavItem>
						<NavItem href="/#">Blog</NavItem>
						<li>
							<a href="/#" className="rounded-md bg-white px-8 py-3 text-blue-500 transition duration-300 hover:bg-slate-100 hover:text-blue-600">
								Login
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
