import { lazy } from "react";

const ErrorEle = <div>Oops! There was an error.</div>;

export const ERROR_PATH = {
	UNAUTHORIZED: "/unauthorized",
};

export const ERROR_ROUTES = [
	{
		path: "*",
		element: lazy(() => import("../pages/Error/PageNotFound")),
		errorElement: ErrorEle,
	},
];
