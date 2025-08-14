import React, { useEffect, useState } from 'react';
import ExperienceCard from './ExperienceCard';

interface Experience {
  _id: string;
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
}


const ExperiencesList: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/experiences');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Experience[] = await response.json();
        setExperiences(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <p>Loading experiences...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
  {experiences.map(exp => (
    <ExperienceCard
      key={exp._id}
      role={exp.role}
      company={exp.company}
      startDate={exp.startDate}
      endDate={exp.endDate}
      description={exp.description}
      techStack={exp.techStack}
      imageUrl={exp.imageUrl}
    />
  ))}
</div>

  );
};

export default ExperiencesList;
