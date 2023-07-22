import { lazy } from "react";

const D3 = lazy(() => import("../Pages/D3/D3"));
const Layout = lazy(() => import("../components/Layout/Layout"));
const ErrorEle = <div>Oops! There was an error.</div>;

export const D3_PATH = {
	D3: "/d3",
};

export const D3_ROUTES = [
	{
		element: <Layout />,
		children: [
			{
				path: D3_PATH.D3,
				element: <D3 />,
				errorElement: ErrorEle,
			},
		],
	},
];
