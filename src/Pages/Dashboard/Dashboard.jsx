import { Card } from "flowbite-react";

const chartsitem = [
	{
		title: "Recharts",
	},
	{
		title: "Victory",
	},
	{
		title: "D3 (coming soon)",
	},
];

export default function Dashboard() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
				<h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
					Charts used in this repo
				</h2>
				<div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-3 dark:text-gray-400">
					{chartsitem.map((item) => (
						<Card
							key={item?.title}
							className="flex justify-center items-center"
						>
							<h3 className="mb-2 text-xl font-bold dark:text-white">
								{item?.title}
							</h3>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
