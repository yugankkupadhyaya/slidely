import { Project } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import React from 'react';
import { create } from 'zustand';

type Props = {
  projectId: string;
  title: string;
  createdAt: string;
  src: string;
  isDeleted?: boolean;
  slideData: JsonValue;
};

const ProjectCard = ({ projectId, title, createdAt, src, isDeleted, slideData }: Props) => {

  
  return <div>ProjectCard</div>;
};

export default ProjectCard;
