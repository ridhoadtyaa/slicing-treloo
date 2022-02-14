import ButtonCard from './ButtonCard';

const categoryColor = {
	Relax: {
		bgColor: 'bg-pink-200/80',
		textColor: 'text-pink-500',
	},
	Adventure: {
		bgColor: 'bg-violet-200/50',
		textColor: 'text-violet-500',
	},
};

export default function CardSpecial({ thumbnail, date, name, category, price, time }) {
	return (
		<div className="mt-8 rounded-[2.5rem] bg-white py-4 pl-4 shadow transition duration-300 hover:scale-105 hover:shadow">
			<div className="flex items-center">
				<img src={thumbnail} className="w-[293px] rounded-[50px]" alt={name} />
				<p className="-mr-16 -ml-14 rotate-90 break-normal text-lg uppercase tracking-[8px] text-slate-500">{date}</p>
			</div>
			<div className="mx-auto mt-4 w-10/12">
				<div className="flex items-center">
					<div className={`rounded-full px-4 py-1 text-sm font-medium ${categoryColor[category].bgColor} ${categoryColor[category].textColor}`}>
						{category}
					</div>
					<div className="ml-3 text-sm font-medium text-slate-500">{time}</div>
				</div>
				<h3 className="mt-4 text-2xl font-semibold">{name}</h3>
				<div className="flex items-center justify-between">
					<h3 className="mt-4 text-2xl font-semibold">
						{price}$<span className="text-xl text-slate-500">/Person</span>
					</h3>
					<ButtonCard>Book Now</ButtonCard>
				</div>
			</div>
		</div>
	);
}
