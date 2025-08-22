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

// helperfunction to show "2022-08" as "Aug 2022"
function formatDateString(dateString?: string) {
  if (!dateString) return "Present";
  const [year, month] = dateString.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  // fallback if month doesnt exists
  const monthName = month ? monthNames[parseInt(month, 10) - 1] : "";
  return `${monthName} ${year}`;
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
        {formatDateString(startDate)} - {endDate ? formatDateString(endDate) : "Present"}
      </p>
      <p className="mb-4">{description}</p>
      <p className="text-sm text-gray-700">
        <strong>Tech stack:</strong> {techStack.join(", ")}
      </p>
    </div>
  );
};

export default ExperienceCard;
