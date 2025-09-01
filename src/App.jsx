import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Layouts/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Habits from './pages/Habits';
import Mood from './pages/Mood';
import GitHub from './pages/GitHub';
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        {/* Navigation stays visible on all pages */}
        <Navigation />

        {/* Main content */}
        <main className="pb-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/mood" element={<Mood />} />
            <Route path="/github" element={<GitHub />} />

            {/* Static pages */}
            <Route
              path="/goals"
              element={
                <div className="max-w-7xl mx-auto p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Goals & Challenges</h1>
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-purple-100 text-center">
                    <div className="text-purple-600 mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl">🎯</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Goals Coming Soon!</h3>
                    <p className="text-gray-600">Set and track your coding goals and achievements.</p>
                  </div>
                </div>
              }
            />

            <Route
              path="/inspiration"
              element={
                <div className="max-w-7xl mx-auto p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Daily Inspiration</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 text-white">
                      <h3 className="text-lg font-semibold mb-3">💫 Quote of the Day</h3>
                      <p className="text-purple-100 italic mb-2">
                        "The best time to plant a tree was 20 years ago. The second best time is now."
                      </p>
                      <p className="text-sm text-purple-200">- Chinese Proverb</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">🔥 Today's Challenge</h3>
                      <p className="text-gray-600 mb-2">
                        Try implementing a new React hook you've never used before!
                      </p>
                      <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                        Accept Challenge →
                      </button>
                    </div>
                  </div>
                </div>
              }
            />

            <Route
              path="/profile"
              element={
                <div className="max-w-7xl mx-auto p-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Settings</h1>
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-purple-100">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        S
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">Sarah Johnson</h2>
                        <p className="text-gray-600">Frontend Developer</p>
                        <p className="text-sm text-gray-500">sarah.johnson@example.com</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Account Settings</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>• Change password</p>
                          <p>• Update email</p>
                          <p>• Privacy settings</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Preferences</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>• Theme: Light mode</p>
                          <p>• Notifications: Enabled</p>
                          <p>• Language: English</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

