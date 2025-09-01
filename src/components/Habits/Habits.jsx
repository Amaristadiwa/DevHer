import React, { useState } from "react";

const defaultHabits = [
  "Code for 1 hour",
  "Read a tech article",
  "Practice algorithm",
  "Work on portfolio",
];

const Habits = () => {
  const [habits, setHabits] = useState(defaultHabits);
  const [completed, setCompleted] = useState([]);

  const toggleHabit = (habit) => {
    setCompleted((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-3">Your Daily Habits</h2>
      <ul className="space-y-2">
        {habits.map((habit) => (
          <li key={habit} className="flex items-center">
            <input
              type="checkbox"
              checked={completed.includes(habit)}
              onChange={() => toggleHabit(habit)}
              className="mr-2 w-4 h-4 accent-pink-500"
            />
            <span
              className={`${
                completed.includes(habit)
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : ""
              }`}
            >
              {habit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Habits;
