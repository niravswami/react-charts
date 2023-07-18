import { Outlet } from "react-router-dom";
import MyNavbar from "../MyNavbar";
import MySidebar from "../MySidebar/MySidebar";

export default function Layout() {
	return (
		<>
			{/* <NavbarComp /> */}
			{/* <Aside /> */}
			{/* <main className="p-4 md:ml-64 h-auto pt-20 mt-12 md:mt-0">
        <Outlet />

    </main> */}
			<MyNavbar />
			<MySidebar />
			<main className="p-4 md:ml-64 h-auto pt-20 mt-12 md:mt-0">
				<Outlet />
			</main>
		</>
	);
}
