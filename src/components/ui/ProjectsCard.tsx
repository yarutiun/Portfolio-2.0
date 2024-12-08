const ProjectCard = ({
  name,
  description,
  image,
  link,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="bg-gray-100 box-border rounded-lg max-w-sm w-80 h-auto p-5 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      
      {/* Name Section */}
      <h2 className="text-xl font-bold mb-2 text-orange-500">{name}</h2>
      
      {/* Description Section */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      {/* Action Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 transition-colors duration-300"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
