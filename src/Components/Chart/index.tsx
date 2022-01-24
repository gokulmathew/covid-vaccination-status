import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface IChart {
  chartData: any;
  chartKey: string;
  dataKey1: string;
  dataKey2: string;
  dataKey3: string;
  width: number;
  height: number;
  barSize: number;
}

export default function Chart({
  chartData,
  chartKey,
  dataKey1,
  dataKey2,
  dataKey3,
  width,
  height,
  barSize,
}: IChart) {
  return (
    <BarChart
      width={width}
      height={height}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={barSize}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={chartKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={dataKey1} stackId="a" fill="#82ca9d" />
      <Bar dataKey={dataKey2} stackId="b" fill="#8884d8" />
      <Bar dataKey={dataKey3} stackId="b" fill="#ffc658" />
    </BarChart>
  );
}
