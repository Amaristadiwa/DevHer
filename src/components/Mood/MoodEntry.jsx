import React from 'react';

export default function MoodEntry({ selectedMood, setSelectedMood, note, setNote, onSave }) {
  const moods = [
    { emoji: '😢', label: 'Very Sad', color: 'text-blue-500' },
    { emoji: '😞', label: 'Sad', color: 'text-blue-400' },
    { emoji: '😐', label: 'Neutral', color: 'text-gray-500' },
    { emoji: '😊', label: 'Happy', color: 'text-green-400' },
    { emoji: '😄', label: 'Very Happy', color: 'text-green-500' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">How are you feeling today?</h3>
      
      <div className="flex justify-center space-x-4 mb-6">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(mood.label)}
            className={`p-3 rounded-full transition-all duration-200 ${
              selectedMood === mood.label
                ? 'bg-gradient-to-br from-pink-500 to-purple-500 text-white scale-110 shadow-lg'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <span className="text-2xl">{mood.emoji}</span>
          </button>
        ))}
      </div>
      
      {selectedMood && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add a note about your day (optional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What made you feel this way today?"
              className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>
          
          <button
            onClick={onSave}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
          >
            Save Mood Entry
          </button>
        </div>
      )}
    </div>
  );
}

