import {
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  ReferenceLine,
  Line,
} from "recharts";

function MyBarChart(newData: any) {
  console.log("input:", newData);
  return (
    <BarChart width={730} height={500} data={newData.data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        type="number"
        padding={"gap"}
        domain={[1, 8]}
        ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
      />
      <YAxis ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]} />
      <Tooltip />
      <Legend />

      <Line type="monotone" dataKey="name" stroke="#8884d8" dot={true} />
      <ReferenceLine
        x={4.5}
        type="float"
        stroke="black"
        strokeDasharray="3 3"
        label={
          "Forgotten" +
          "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
          "Memorized"
        }
      />

      <Bar dataKey="π" fill="#8884d8" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );
}

export default MyBarChart;
