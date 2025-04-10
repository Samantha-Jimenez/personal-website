import React from 'react';

const tagColors: { [key: string]: string } = {
  Lifestyle: 'bg-[#F1FCF5] text-[#00D290]',
  Beauty: 'bg-[#FFF0F6] text-[#F42F98]',
  Fitness: 'bg-[#F0FAFF] text-[#00BAFE]',
  Tech: 'bg-[#ECF0FE] text-[#412AD5]',
  Food: 'bg-[#FFF3F4] text-[#FF627E]',
  Music: 'bg-[#F1FBF9] text-[#00D2BC]',
  Travel: 'bg-[#FFFAEF] text-[#FCB700]',
};

export const formatTags = (tags: string[]) => {
  return (
    <div className="flex space-x-2">
      {tags.map(tag => (
        <span key={tag} className={`badge border-none rounded-full ${tagColors[tag] || ''}`}>
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </span>
      ))}
    </div>
  );
};