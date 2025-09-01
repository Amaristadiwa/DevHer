import React, { useState } from 'react';
import HabitCard from '../components/Habits/Habits';
import { Plus, Calendar, TrendingUp } from 'lucide-react';

export default function Habits() {
  const [habits, setHabits] = useState([
    {
      id: '1',
      name: 'Code Daily',
      description: 'Write code for at least 1 hour',
      streak: 12,
      bestStreak: 18,
      completedToday: true,
      weeklyProgress: [true, true, false, true, true, true, false],
      color: 'bg-gradient-to-br from-pink-500 to-rose-500',
      icon: '💻'
    },
    {
      id: '2',
      name: 'Learn Framework',
      description: 'Study a new framework or technology',
      streak: 5,
      bestStreak: 12,
      completedToday: false,
      weeklyProgress: [false, true, true, true, false, true, true],
      color: 'bg-gradient-to-br from-purple-500 to-indigo-500',
      icon: '📚'
    },
    {
      id: '3',
      name: 'Exercise',
      description: '30 minutes of physical activity',
      streak: 8,
      bestStreak: 15,
      completedToday: true,
      weeklyProgress: [true, true, true, false, true, true, true],
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      icon: '🏃‍♀️'
    },
    {
      id: '4',
      name: 'Read Tech Articles',
      description: 'Read developer articles or blogs',
      streak: 3,
      bestStreak: 7,
      completedToday: false,
      weeklyProgress: [true, false, true, true, false, false, true],
      color: 'bg-gradient-to-br from-indigo-500 to-blue-500',
      icon: '📖'
    },
  ]);

  const handleToggleHabit = (habitId) => {
    setHabits(habits.map(habit => 
      habit.id === habitId 
        ? { 
            ...habit, 
            completedToday: !habit.completedToday,
            streak: !habit.completedToday ? habit.streak + 1 : Math.max(0, habit.streak - 1)
          }
        : habit
    ));
  };

  const completedToday = habits.filter(h => h.completedToday).length;
  const totalHabits = habits.length;
  const completionRate = (completedToday / totalHabits) * 100;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Daily Habits</h1>
          <p className="text-gray-600">Build consistency and track your daily routines</p>
        </div>
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>New Habit</span>
        </button>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Progress</p>
              <p className="text-3xl font-bold text-gray-900">{completedToday}/{totalHabits}</p>
              <p className="text-sm text-gray-500">habits completed</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold">{Math.round(completionRate)}%</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Longest Streak</p>
              <p className="text-3xl font-bold text-gray-900">{Math.max(...habits.map(h => h.bestStreak))}</p>
              <p className="text-sm text-gray-500">days</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-3xl font-bold text-gray-900">85%</p>
              <p className="text-sm text-gray-500">completion rate</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Habits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={handleToggleHabit}
          />
        ))}
      </div>

      {/* Motivation Quote */}
      <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white text-center">
        <h3 className="text-lg font-semibold mb-2">💫 Daily Inspiration</h3>
        <p className="text-purple-100 italic">
          "Success is the sum of small efforts, repeated day in and day out."
        </p>
        <p className="text-sm text-purple-200 mt-2">- Robert Collier</p>
      </div>
    </div>
  );
}
