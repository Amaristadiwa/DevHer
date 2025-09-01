import React from 'react';

export default function ProjectCard({ name, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
      >
        View Project
      </a>
    </div>
  );
}
