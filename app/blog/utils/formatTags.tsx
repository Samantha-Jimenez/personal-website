import React from 'react';

const tagColors: { [key: string]: string } = {
  Lifestyle: 'bg-[#F1FCF5] text-[#00D290] dark:bg-[#0A2E1A] dark:text-[#00D290]',
  Beauty: 'bg-[#FFF0F6] text-[#F42F98] dark:bg-[#3D1A2A] dark:text-[#FF5BB8]',
  Fitness: 'bg-[#F0FAFF] text-[#00BAFE] dark:bg-[#0A1F2E] dark:text-[#00BAFE]',
  Food: 'bg-[#FFF3F4] text-[#FF627E] dark:bg-[#3D1A1C] dark:text-[#FF8A9E]',
  Travel: 'bg-[#FFFAEF] text-[#FCB700] dark:bg-[#3D2E0A] dark:text-[#FEB503]',
  Tech: 'bg-[#F3F0FF] text-[#6A00F4] dark:bg-[#1A0F3D] dark:text-[#8A5AFF]',
  Music: 'bg-[#FDF6F1] text-[#D96F32] dark:bg-[#3D251A] dark:text-[#FF8A4D]',
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