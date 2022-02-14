export default function ButtonCard({ children }) {
	return (
		<button className="px-4 py-3 mt-3 font-medium text-blue-500 transition duration-300 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-600 focus:ring focus:ring-blue-200">
			{children}
		</button>
	);
}
