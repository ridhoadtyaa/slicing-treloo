import { useState } from 'react';

export default function RecommendedCategory() {
	const [active, setActive] = useState('Popular');

	const handleClick = e => {
		setActive(e.target.id);
	};

	return (
		<div className="mt-20 mx-auto flex space-x-4 justify-center">
			<button
				id="Popular"
				className={`${active === 'Popular' ? 'bg-white text-blue-500' : 'text-slate-500'} font-semibold py-3 px-6 rounded-lg text-lg`}
				onClick={handleClick}
			>
				Popular
			</button>
			<button
				id="Adventure"
				className={`${active === 'Adventure' ? 'bg-white text-blue-500' : 'text-slate-500'} font-semibold py-3 px-6 rounded-lg text-lg`}
				onClick={handleClick}
			>
				Adventure
			</button>
			<button
				id="Beath"
				className={`${active === 'Beath' ? 'bg-white text-blue-500' : 'text-slate-500'} font-semibold py-3 px-6 rounded-lg text-lg`}
				onClick={handleClick}
			>
				Beath
			</button>
		</div>
	);
}
