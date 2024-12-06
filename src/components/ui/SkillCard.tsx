import React from 'react';

interface SkillCardProps {
    name: string;
    desc: string;
    icon: string;
}

const SkillCard = ({
  name,
  desc,
  icon,
}: SkillCardProps) => {
  return (
    <div className="bg-gray-100 cursor-pointer box-border rounded-md max-w-60 w-60 h-60 p-5 flex flex-col items-center text-center shadow-lg hover:bg-gray-200 transition-colors duration-300">
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-14 h-14 mb-4 object-contain"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default SkillCard;
