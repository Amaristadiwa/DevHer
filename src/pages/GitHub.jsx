import React, { useState, useEffect } from "react";
import GitHubCard from "../components/GitHub/GitHubCard";
import GitHubProfile from "../components/GitHub/GitHubProfile";
import DarkModeToggle from "../components/GitHub/DarkModeToggle";

const GitHub = () => {
  const [username, setUsername] = useState("octocat");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchGitHubData = async () => {
    setLoading(true);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userJson = await userRes.json();
      setUserData(userJson);

      const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);
      const repoJson = await repoRes.json();
      setRepos(repoJson);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900`}>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white mr-2"
          />
          <button
            onClick={fetchGitHubData}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition mr-2"
          >
            Fetch
          </button>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {loading ? (
          <div className="space-y-4">
            {/* Profile Skeleton */}
            <div className="flex items-center space-x-4 animate-pulse">
              <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>

            {/* Repo Skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white dark:bg-gray-800 rounded shadow animate-pulse"
                >
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-full"></div>
                  <div className="flex justify-between h-3 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {userData && <GitHubProfile user={userData} />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {repos.map((repo) => (
                <GitHubCard key={repo.id} repo={repo} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GitHub;

