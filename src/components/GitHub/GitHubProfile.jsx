import React from "react";

const GitHubProfile = ({ user }) => {
  return (
    <div className="flex items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-6">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {user.name || user.login}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
        <div className="flex space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
          <span>Repos: {user.public_repos}</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
