import React from "react";

const GitHubCard = ({ repo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {repo.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-1">
        {repo.description || "No description"}
      </p>
      <div className="flex justify-between mt-3 text-sm text-gray-500 dark:text-gray-400">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>🛠 {repo.language || "N/A"}</span>
      </div>
    </div>
  );
};

export default GitHubCard;
