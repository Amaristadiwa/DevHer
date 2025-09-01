import React from 'react';

import ProjectCard from "../components/Projects/ProjectCard";

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind.",
    link: "https://yourportfolio.com",
  },
  {
    name: "Finance Tracker",
    description: "Dashboard to track income, expenses, and savings.",
    link: "https://github.com/yourusername/finance-tracker",
  },
  {
    name: "Wedding Planner App",
    description: "App to help couples plan their weddings efficiently.",
    link: "https://github.com/yourusername/wedding-planner",
  },
];

export default function Projects() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
