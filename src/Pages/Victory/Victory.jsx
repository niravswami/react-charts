import { Card } from "flowbite-react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import StackChart from "./StackChart";

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 },
];

export default function Victory() {
	return (
		<>
			<div className="flex justify-center items-center">
				<span className="text-2xl mb-4">Victory charts</span>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Card>
					<VictoryChart
						// adding the material theme provided with Victory
						theme={VictoryTheme.material}
						// domainPadding will add space to each side of VictoryBar to prevent it from overlapping the axis
						domainPadding={20}
					>
						<VictoryAxis
							// tickValues specifies both the number of ticks and where
							// they are placed on the axis
							tickValues={[1, 2, 3, 4]}
							tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
						/>
						<VictoryAxis
							dependentAxis
							// tickFormat specifies how ticks should be displayed
							tickFormat={(x) => `$${x / 1000}k`}
						/>
						<VictoryBar
							data={data}
							// data accessor for x values
							x="quarter"
							// data accessor for y values
							y="earnings"
						/>
					</VictoryChart>
				</Card>
				<Card>
					<StackChart />
				</Card>
			</div>
		</>
	);
}
