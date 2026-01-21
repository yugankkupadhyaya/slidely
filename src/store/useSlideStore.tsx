import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Slide } from '../lib/types';

interface SlideState {
  slides: Slide[];
  
  setSlides: (slides: Slide[]) => void;
}

export const useSlideStore = create<SlideState>()(
  persist(
    (set) => ({
      
      slides: [],
      setSlides: (slides: Slide[]) => {
        set({ slides });
      },
    }),
    {
      name: 'slide-storage',
    }
  )
);
