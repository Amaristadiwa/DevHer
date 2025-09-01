import React, { useState } from 'react';
import MoodEntry from '../components/Mood/MoodEntry';
import { Calendar, TrendingUp, Heart } from 'lucide-react';

export default function Mood() {
  const [selectedMood, setSelectedMood] = useState('');
  const [note, setNote] = useState('');

  const handleSaveMood = () => {
    console.log('Saving mood:', selectedMood, note);
    // Reset form
    setSelectedMood('');
    setNote('');
    // Show success message
    alert('Mood saved successfully! 💖');
  };

  // Mock data for mood history
  const moodHistory = [
    { date: 'Today', mood: 'Very Happy', emoji: '😄', note: 'Finished a challenging feature!' },
    { date: 'Yesterday', mood: 'Happy', emoji: '😊', note: 'Good progress on my projects' },
    { date: 'Dec 24', mood: 'Neutral', emoji: '😐', note: 'Regular day, nothing special' },
    { date: 'Dec 23', mood: 'Happy', emoji: '😊', note: 'Learned something new about React' },
    { date: 'Dec 22', mood: 'Very Happy', emoji: '😄', note: 'Got positive feedback on my code' },
  ];

  const moodStats = {
    thisWeek: 'Mostly Happy 😊',
    streak: 5,
    average: 4.2
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Mood Tracker</h1>
        <p className="text-gray-600">Track your daily emotions and identify patterns in your well-being</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mood Entry */}
        <div className="lg:col-span-2">
          <MoodEntry
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            note={note}
            setNote={setNote}
            onSave={handleSaveMood}
          />
          
          {/* Mood History */}
          <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 text-purple-600 mr-2" />
              Recent Entries
            </h3>
            
            <div className="space-y-3">
              {moodHistory.map((entry, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-2xl">{entry.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{entry.mood}</h4>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    {entry.note && (
                      <p className="text-sm text-gray-600 mt-1">{entry.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          {/* Weekly Overview */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
              This Week
            </h3>
            
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{moodStats.thisWeek}</p>
                <p className="text-sm text-gray-600">Overall mood</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3">
                  <p className="text-xl font-bold text-gray-900">{moodStats.streak}</p>
                  <p className="text-xs text-gray-600">Day streak</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-3">
                  <p className="text-xl font-bold text-gray-900">{moodStats.average}/5</p>
                  <p className="text-xs text-gray-600">Average</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mood Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Trend</h3>
            
            <div className="space-y-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                const moodValue = [4, 5, 3, 4, 5, 4, 4][index]; // Mock data
                const width = (moodValue / 5) * 100;
                return (
                  <div key={day} className="flex items-center space-x-2">
                    <span className="text-xs text-gray-600 w-8">{day}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600 w-6">{moodValue}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Self-Care Reminders */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Self-Care Tips
            </h3>
            <div className="space-y-2 text-sm">
              <p>• Take breaks every hour</p>
              <p>• Stay hydrated 💧</p>
              <p>• Practice deep breathing</p>
              <p>• Celebrate small wins 🎉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
