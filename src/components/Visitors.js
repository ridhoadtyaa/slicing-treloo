import { useState } from 'react';
import ButtonVisitors from './ButtonVisitors';

const types = [{ name: 'Team' }, { name: 'Couple' }, { name: 'Family' }];

export default function Visitors() {
	const [type, setType] = useState('Team');

	return (
		<div className="space-x-3 rounded-xl bg-white p-3 shadow">
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
