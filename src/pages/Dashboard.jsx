import React from 'react';

import StatsCard from "../components/Dashboard/StatsCard";
import ActivityChart from "../components/Dashboard/ActivityChart";
import HabitProgress from "../components/Dashboard/HabitProgress";
import QuickActions from "../components/Dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Stats cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Commits" value="128" />
        <StatsCard title="Projects" value="6" />
        <StatsCard title="Habits" value="4" />
        <StatsCard title="Mood Score" value="7.8/10" />
      </div>

      {/* Activity chart */}
      <ActivityChart />

      {/* Habit tracker */}
      <HabitProgress />

      {/* Quick actions */}
      <QuickActions />
    </div>
  );
}

