export default function NavItem({ children, href }) {
	return (
		<li className="hover:text-[#3E86F5] transition duration-300">
			<a href={href}>{children}</a>
		</li>
	);
}
