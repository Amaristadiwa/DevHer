import React from 'react';
export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      {icon && <div className="text-blue-500 mr-3">{icon}</div>}
      <div>
        <h4 className="text-gray-600">{title}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
