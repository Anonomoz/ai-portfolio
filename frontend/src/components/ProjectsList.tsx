import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { API_BASE_URL } from '../config';

interface Project {
  _id: string;
  title: string;
  description: string;
  url?: string;
  techStack: string[];
  imageUrl?: string;
}

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects... Please be patient</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            url={project.url}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
          />
        ))
      )}
    </div>
  );
};

export default ProjectsList;
