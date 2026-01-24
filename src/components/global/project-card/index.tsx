'use client';
import { cn, timeAgo } from '@/lib/utils';

import { JsonValue } from '@prisma/client/runtime/library';
import React from 'react';

import { motion } from 'framer-motion';
import { itemVariants, themes } from '../../../lib/constants';
import { useSlideStore } from '../../../store/useSlideStore';
import { useRouter } from 'next/navigation';
import ThumbnailPreview from './thumbnail-preview';
import { Theme } from './../../../lib/types';

type Props = {
  projectId: string;
  title: string;
  createdAt: string;
  src: string;
  isDeleted?: boolean;
  slideData: JsonValue;
  themeName: string;
};

const ProjectCard = ({
  projectId,
  title,
  createdAt,
  src,
  isDeleted,
  slideData,
  themeName,
}: Props) => {
  const router = useRouter();
  const { setSlides } = useSlideStore();

  const handleNavigate = () => {
    setSlides(JSON.parse(JSON.stringify(slideData)));
    router.push(`/presentation/${projectId}`);
  };
  const theme = themes.find((theme) => theme.name === themeName);
  return (
    <motion.div
     
      variants={itemVariants}
      className={cn(
        'group w-full flex flex-col gap-y-3 rounded-xl p-3 transition-colors',
        isDeleted && 'hover:bg-muted/50'
      )}
    >
      <div
        className="relative aspect-16/10 overflow-hidden rounded-lg cursor-pointer"
        onClick={handleNavigate}
      >
        {theme && (
          <ThumbnailPreview
            theme={theme}
            // wip:add slide data
            // slide={JSON.parse(JSON.stringify(slideData))?.[0]}
          />
        )}
      </div>
      <div className="w-full">
        <div className="space-y-1">
          <h3 className="font-semibold text-base text-primary line-clamp-1">{title}</h3>
          <div className="flex w-full justify-between items-center gap-2">
            <p className="text-sm text-muted-foreground" suppressHydrationWarning>
              {timeAgo(createdAt)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
