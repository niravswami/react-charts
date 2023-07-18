import { Navbar } from "flowbite-react";

export default function MyNavbar() {
	return (
		<Navbar fluid rounded border className="fixed left-0 right-0 top-0 z-50">
			<Navbar.Brand href="https://flowbite-react.com">
				<img
					alt="Flowbite React Logo"
					className="mr-3 h-6 sm:h-9"
					src="https://flowbite.s3.amazonaws.com/logo.svg"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					React Chart
				</span>
			</Navbar.Brand>
		</Navbar>
	);
}
