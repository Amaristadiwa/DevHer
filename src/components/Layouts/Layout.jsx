import React from 'react';
import { 
  Home, 
  CheckSquare, 
  Heart, 
  Github, 
  Target, 
  Sparkles, 
  Settings, 
  User,
  Code2,
  TrendingUp
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'habits', label: 'Habits', icon: CheckSquare },
    { id: 'github', label: 'GitHub', icon: Github },
    { id: 'mood', label: 'Mood', icon: Heart },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'inspiration', label: 'Inspiration', icon: Sparkles },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                DevHer
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Track your growth</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Link
                key={id}
                to={`/${id}`}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === `/${id}`
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-200'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden lg:inline">{label}</span>
              </Link>
            ))}
          </div>

          <button className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-purple-100">
        <div className="flex overflow-x-auto space-x-1 p-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <Link
              key={id}
              to={`/${id}`}
              className={`flex-shrink-0 flex flex-col items-center space-y-1 p-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                location.pathname === `/${id}`
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

