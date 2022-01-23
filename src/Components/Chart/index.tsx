import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface IChart {
  chartData: any;
  chartName: string;
  chartKey: string;
  dataKey1: string;
  dataKey2: string;
  dataKey3: string;
}

export default function Chart({
  chartData,
  chartKey,
  dataKey1,
  dataKey2,
  dataKey3,
  chartName,
}: IChart) {
  return (
    <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      // To change the bar width
      barSize={20}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/* tick false means no x axis name */}
      {/* dataKey represents the name to displayed when hover on a bar */}
      {/* <XAxis
        label={{ value: "State's Vaccination Status", dy: 10 }}
        tick={false}
      /> */}
      <XAxis dataKey={chartKey} label={{ value: { chartName }, dy: 20 }} />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey={dataKey1} stackId="a" fill="#8884d8" />
      <Bar dataKey={dataKey2} stackId="b" fill="#82ca9d" />
      <Bar dataKey={dataKey3} stackId="b" fill="red" />
    </BarChart>
  );
}
