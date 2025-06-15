import React from 'react';

const tagColors: { [key: string]: string } = {
  Lifestyle: 'bg-[#F1FCF5] text-[#00D290]',
  Beauty: 'bg-[#FFF0F6] text-[#F42F98]',
  Fitness: 'bg-[#F0FAFF] text-[#00BAFE]',
  Food: 'bg-[#FFF3F4] text-[#FF627E]',
  Travel: 'bg-[#FFFAEF] text-[#FCB700]',
  Tech: 'bg-[#F3F0FF] text-[#6A00F4]',
  Music: 'bg-[#FDF6F1] text-[#D96F32]',
};

export const formatTags = (tags: string[]) => {
  return (
    <span className="flex space-x-2">
      {tags.map(tag => (
        <span key={tag} className={`badge border-none text-xs rounded-full ${tagColors[tag] || ''}`}>
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </span>
      ))}
    </span>
  );
};