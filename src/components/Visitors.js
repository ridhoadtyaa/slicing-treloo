import { useState } from 'react';
import ButtonVisitors from './ButtonVisitors';

const types = [{ name: 'Team' }, { name: 'Couple' }, { name: 'Family' }];

export default function Visitors() {
	const [type, setType] = useState('Team');

	return (
		<div className="p-3 space-x-3 bg-white shadow rounded-xl">
			{types.map(item => {
				return (
					<ButtonVisitors key={item.name} active={type === item.name} onClick={() => setType(item.name)}>
						{item.name}
					</ButtonVisitors>
				);
			})}
		</div>
	);
}
