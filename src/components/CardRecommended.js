export default function CardRecommended({ thumbnail, rate, name, location, id }) {
	return (
		<div className="p-3 mb-6 transition duration-300 bg-white shadow cursor-pointer rounded-3xl hover:scale-105" key={id}>
			<div className="relative w-full">
				<img src={thumbnail} className="rounded-3xl" alt={name} />
				<div className="absolute flex items-center px-4 py-1 bg-white top-4 right-4 rounded-3xl">
					{/* prettier-ignore */}
					<svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-yellow-400 stroke-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
					<div className="ml-1 text-xs font-medium">{rate}</div>
				</div>
			</div>
			<div className="w-10/12 mx-auto mt-6">
				<h3 className="text-lg font-semibold">{name}</h3>
				<div className="flex items-center mt-2">
					{/* prettier-ignore */}
					<svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width={17} height={17} fill="url(#pattern0-040955)" />
                        <defs>
                            <pattern id="pattern0-040955" patternContentUnits="objectBoundingBox" width={1} height={1}>
                            <use xlinkHref="#image0_10_6" transform="scale(0.01)" />
                            </pattern>
                            <image id="image0_10_6" width={100} height={100} xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
					<p className="ml-1 text-sm font-medium text-slate-500">{location}</p>
				</div>
			</div>
		</div>
	);
}
