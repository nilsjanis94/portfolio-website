'use client';

import { useState, useEffect } from 'react';
// @ts-ignore
import ColorThief from 'colorthief';

export function useImageColor(imageUrl: string) {
  const [dominantColor, setDominantColor] = useState<string>('');
  const [palette, setPalette] = useState<string[]>([]);

  useEffect(() => {
    const img = new Image();
    const colorThief = new ColorThief();

    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;

    img.onload = () => {
      const color = colorThief.getColor(img);
      const colors = colorThief.getPalette(img, 5);

      setDominantColor(`rgb(${color.join(',')})`);
      setPalette(colors.map((c: number[]) => `rgb(${c.join(',')})`));
    };
  }, [imageUrl]);

  return { dominantColor, palette };
} 