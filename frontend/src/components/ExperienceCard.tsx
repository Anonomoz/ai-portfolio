import React from 'react';

interface ExperienceCardProps {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  startDate,
  endDate,
  description,
  techStack,
  imageUrl,
}) => {
  return (
    <div className="p-6 rounded-2xl shadow-lg 
                    bg-gradient-to-br from-blue-200 to-blue-400 
                    transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl mb-6 max-w-md mx-auto">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={role}
          className="w-full h-48 object-contain rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-bold mb-1">
        {role} @ {company}
      </h3>
      <p className="text-sm text-gray-700 mb-2">
        {new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {endDate ? new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Present'}
      </p>
      <p className="mb-4">{description}</p>
      <p className="text-sm text-gray-700">
        <strong>Tech stack:</strong> {techStack.join(', ')}
      </p>
    </div>
  );
};

export default ExperienceCard;
