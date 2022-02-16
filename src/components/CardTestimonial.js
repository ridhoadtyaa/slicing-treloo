export default function CardTestimonial({ quotes, name, position, avatar, rating }) {
	return (
		<div className="relative mb-20 rounded-[50px] bg-white p-8 text-center">
			<img src={require('../assets/img/quote.png')} className="mx-auto" alt="Quote" />
			<p className="relative -top-12 z-10 text-lg font-medium leading-loose md:text-xl">{quotes}</p>
			<p className="relative z-20 -mt-6 text-xl font-medium text-blue-500">-{name}</p>
			<p className="relative z-20 mt-4 mb-12 text-xl font-medium text-slate-500">{position}</p>
			<div className="absolute -bottom-10 right-1/2 z-10 mx-auto -mb-2 translate-x-1/2 rounded-full bg-white p-16">
				<div className="relative w-max">
					<img src={avatar} className="relative -bottom-12" alt={name} />
					<div className="absolute -right-4 top-14 flex items-center rounded-full bg-white p-1">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-yellow-400 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
						<div className="ml-1 text-xs font-medium">{rating}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
