'use client';

import { motion } from 'framer-motion';
import { containerVariants } from '../../../lib/constants';
import { Project } from '@prisma/client';
import ProjectCard from '../project-card';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          projectId={project?.id}
          title={project?.title}
          createdAt={project.createdAt.toString()}
          isDeleted={project?.isDeleted}
          slideData={project?.slides}
          themeName={project.themeName}
          src={
            project.thumbnail ||
            'https://unsplash.com/photos/a-pile-of-multicolored-confetti-sitting-on-top-of-a-white-table-BSPG-wXR7zM'
          }
        />
      ))}
    </motion.div>
  );
};

export default Projects;
