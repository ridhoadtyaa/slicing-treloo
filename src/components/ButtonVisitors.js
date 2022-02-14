export default function Button({ active, children, onClick }) {
	return (
		<button className={`py-2.5 px-6 ${active ? 'bg-blue-500 text-white' : 'text-slate-500'} rounded-[10px] font-medium text-lg`} onClick={onClick}>
			{children}
		</button>
	);
}
