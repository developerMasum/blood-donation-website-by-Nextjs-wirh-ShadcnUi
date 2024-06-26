"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 2,
  },
  {
    name: "Feb",
    total: 1
  },
  {
    name: "Mar",
    total: 3
  },
  {
    name: "Apr",
    total: 1
  },
  {
    name: "May",
    total: 4
  },
  {
    name: "Jun",
    total: 1
  },
  {
    name: "Jul",
    total: 3
  },
  {
    name: "Aug",
    total: 5
  },
  {
    name: "Sep",
    total: 1
  },
  {
    name: "Oct",
    total: 3
  },
  {
    name: "Nov",
    total: 2
  },
  {
    name: "Dec",
    total: 1
  },
];

export function UserChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value} times `}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
