import { lazy } from "react";

const Recharts = lazy(() => import("../Pages/Recharts/Recharts"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const ErrorEle = <div>Oops! There was an error.</div>;

export const RECHART_PATH = {
	RECHART: "/rechart",
};

export const RECHART_ROUTES = [
	{
		element: <Layout />,
		children: [
			{
				path: RECHART_PATH.RECHART,
				element: <Recharts />,
				errorElement: ErrorEle,
			},
		],
	},
];
