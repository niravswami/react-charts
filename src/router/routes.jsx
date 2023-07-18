import Dashboard from "../Pages/Dashboard/Dashboard";
import Layout from "../components/Layout/Layout";
import { RECHART_ROUTES } from "./chartRoutes";
import { VICTORY_ROUTES } from "./victoryRoutes";
import { ERROR_ROUTES } from "./errorRoutes";
import { D3_ROUTES } from "./d3Routes";

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
