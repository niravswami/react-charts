import { lazy } from "react";

const Victory = lazy(() => import("../Pages/Victory/Victory"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const ErrorEle = <div>Oops! There was an error.</div>;

export const VICTORY_PATH = {
	VICTORY: "/victory",
};

export const VICTORY_ROUTES = [
	{
		element: <Layout />,
		children: [
			{
				path: VICTORY_PATH.VICTORY,
				element: <Victory />,
				errorElement: ErrorEle,
			},
		],
	},
];
