import CardRecommended from './CardRecommended';

const destinations = [
	{
		id: 1,
		thumbnail: require('../assets/img/thumbnail-4.png'),
		rate: '3.4',
		name: 'Kina Mountain',
		location: 'Cambodia',
	},
	{
		id: 2,
		thumbnail: require('../assets/img/thumbnail-5.png'),
		rate: '4.5',
		name: 'Kina Mountain',
		location: 'Cambodia',
	},
	{
		id: 3,
		thumbnail: require('../assets/img/thumbnail-6.png'),
		rate: '4.2',
		name: 'Kina Mountain',
		location: 'Cambodia',
	},
	{
		id: 4,
		thumbnail: require('../assets/img/thumbnail-7.png'),
		rate: '3.5',
		name: 'Kina Mountain',
		location: 'Cambodia',
	},
];

export default function RecommendedDestination() {
	return (
		<div className="flex flex-wrap justify-evenly mt-20">
			{destinations.map(destination => {
				return <CardRecommended {...destination} key={destination.id} />;
			})}
		</div>
	);
}
