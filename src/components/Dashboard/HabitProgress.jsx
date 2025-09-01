import React from 'react';
const habits = [
  { name: "Read Docs", progress: 80 },
  { name: "Practice Coding", progress: 60 },
  { name: "Exercise", progress: 50 },
  { name: "Write Blog", progress: 30 },
];

export default function HabitProgress() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Habit Progress</h3>
      <div className="space-y-4">
        {habits.map((habit) => (
          <div key={habit.name}>
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">{habit.name}</span>
              <span className="text-gray-600">{habit.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: `${habit.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
