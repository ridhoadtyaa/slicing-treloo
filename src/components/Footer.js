export default function Footer() {
	return (
		<footer className="container mx-auto mt-28 flex items-center justify-center px-10 pb-20 lg:justify-between">
			<p className="text-center text-xl font-medium text-slate-500">&copy; 2022 Treloo LLC - All right reserved.</p>
			<ul className="hidden flex-row space-x-12 lg:flex">
				<li className="text-2xl font-medium transition duration-300 hover:text-blue-500">
					<a href="/#">Review</a>
				</li>
				<li className="text-2xl font-medium transition duration-300 hover:text-blue-500">
					<a href="/#">Tips</a>
				</li>
				<li className="text-2xl font-medium transition duration-300 hover:text-blue-500">
					<a href="/#">Alert</a>
				</li>
				<li className="text-2xl font-medium transition duration-300 hover:text-blue-500">
					<a href="/#">Blog</a>
				</li>
			</ul>
		</footer>
	);
}
