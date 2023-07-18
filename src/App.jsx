import { Flowbite, Spinner } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ROUTER } from "./router/routes";

function processRoutes(routes) {
	return routes.map((route) => {
		const { element, children, ...rest } = route;

		if (children && children.length > 0) {
			return (
				<Route key={`with-child${route?.path}`} {...rest} element={element}>
					{processRoutes(children)}
				</Route>
			);
		}
		return (
			<Route key={`without-child${route?.path}`} {...rest} element={element} />
		);
	});
}

function App() {
	return (
		<>
			<BrowserRouter>
				<Flowbite>
					<div className="antialiased bg-gray-50 dark:bg-gray-900">
						<Suspense
							fallback={
								<Spinner aria-label="Extra large spinner example" size="xl" />
							}
						>
							<Routes>{processRoutes(ROUTER)}</Routes>
						</Suspense>
					</div>
				</Flowbite>
			</BrowserRouter>
		</>
	);
}

export default App;
