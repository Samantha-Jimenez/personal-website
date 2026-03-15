import React from 'react';

const tagColors: { [key: string]: string } = {
  Lifestyle: 'bg-[#F1FCF5] text-[#00C47F] dark:bg-[#0A2416] dark:text-[#00D290]',
  Beauty:    'bg-[#FFF0F6] text-[#E8258A] dark:bg-[#2E1020] dark:text-[#FF5BB8]',
  Fitness:   'bg-[#EFF9FF] text-[#00ADEF] dark:bg-[#071B29] dark:text-[#00BAFE]',
  Food:      'bg-[#FFF2F3] text-[#F04D68] dark:bg-[#2E1012] dark:text-[#FF8A9E]',
  Travel:    'bg-[#FFFAEC] text-[#E5A800] dark:bg-[#2E2208] dark:text-[#FEB503]',
  Tech:      'bg-[#F2EEFF] text-[#5C00E0] dark:bg-[#130A30] dark:text-[#8A5AFF]',
  Music:     'bg-[#FDF5EF] text-[#C4601F] dark:bg-[#2E1A0D] dark:text-[#FF8A4D]',
  Books:     'bg-[#FDF8F0] text-[#A0622A] dark:bg-[#2A1A08] dark:text-[#D4955A]',
  Archive:   'bg-[#F4F4F5] text-[#71717A] dark:bg-[#1C1C1E] dark:text-[#A1A1AA]',
};

export const formatTags = (tags: string[]) => {
  return (
    <span className="flex flex-wrap gap-1 mb-1">
      {tags.map(tag => (
        <span key={tag} className={`badge border-none text-xs rounded-full ${tagColors[tag] || ''}`}>
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </span>
      ))}
    </span>
  );
};