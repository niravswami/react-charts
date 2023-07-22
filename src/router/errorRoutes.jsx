import { lazy } from "react";

const PageNotFound = lazy(() => import("../pages/Error/PageNotFound"));
const ErrorEle = <div>Oops! There was an error.</div>;

export const ERROR_PATH = {
	UNAUTHORIZED: "/unauthorized",
};

export const ERROR_ROUTES = [
	{
		path: "*",
		element: <PageNotFound />,
		errorElement: ErrorEle,
	},
];
