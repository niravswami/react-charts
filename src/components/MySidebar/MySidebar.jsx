import { Sidebar } from "flowbite-react";
import styles from "./MySidebar.module.css";
import { RECHART_PATH } from "../../router/chartRoutes";
import { Link } from "react-router-dom";
import { VICTORY_PATH } from "../../router/victoryRoutes";
import { D3_PATH } from "../../router/d3Routes";

export default function MySidebar() {
	const asideitems = [
		{
			href: "/",
			text: "Dashboard",
		},
		{
			href: RECHART_PATH.RECHART,
			text: "Rechart",
		},
		{
			href: VICTORY_PATH.VICTORY,
			text: "Victory",
		},
		{
			href: D3_PATH.D3,
			text: "D3",
		},
	];
	return (
		<div className={styles.section}>
			<Sidebar
				// top-0 left-0 z-40 w-64 h-screen pt-14
				className={`fixed pt-14
             transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
				aria-label="Default sidebar example"
			>
				<Sidebar.Items>
					<Sidebar.ItemGroup>
						{asideitems.map((item) => (
							<Link to={item.href} key={item.href}>
								<Sidebar.Item as="div">
									<p>{item.text}</p>
								</Sidebar.Item>
							</Link>
						))}
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	);
}
