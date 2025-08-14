import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  url?: string;
  techStack: string[];
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  url,
  techStack,
  imageUrl
}) => {
  return (
<div className="p-6 rounded-2xl shadow-lg 
                bg-gradient-to-br from-purple-200 to-purple-400 
                transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl mb-6 max-w-md mx-auto">
  {imageUrl && (
    <img
      src={imageUrl}
      alt={title}
          className="w-full h-48 object-contain rounded-md mb-4"
    />
  )}
  <h3 className="text-xl font-bold mb-2">{title}</h3>
  <p className="mb-2">{description}</p>
  {url && (
    <p className="mb-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Visit project
      </a>
    </p>
  )}
  <p className="text-sm text-gray-700 mb-1">
    <strong>Tech stack:</strong> {techStack.join(', ')}
  </p>
</div>
  );
};

export default ProjectCard;
