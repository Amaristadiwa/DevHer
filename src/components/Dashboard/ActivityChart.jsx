import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", commits: 4 },
  { name: "Tue", commits: 6 },
  { name: "Wed", commits: 3 },
  { name: "Thu", commits: 5 },
  { name: "Fri", commits: 8 },
  { name: "Sat", commits: 2 },
  { name: "Sun", commits: 4 },
];

export default function ActivityChart() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="commits" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
