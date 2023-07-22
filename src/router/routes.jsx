import { RECHART_ROUTES } from "./chartRoutes";
import { VICTORY_ROUTES } from "./victoryRoutes";
import { ERROR_ROUTES } from "./errorRoutes";
import { D3_ROUTES } from "./d3Routes";
import { lazy } from "react";

const Layout = lazy(() => import("../components/Layout/Layout"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));

export const ROUTER = [
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
		],
	},
	...RECHART_ROUTES,
	...VICTORY_ROUTES,
	...D3_ROUTES,

	// -------------- ADD NEW ROUTERS ABOVE ---------------
	...ERROR_ROUTES,
];
