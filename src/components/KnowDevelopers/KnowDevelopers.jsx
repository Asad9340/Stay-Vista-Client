const KnowDevelopers = () => {
  const developers = [
    {
      name: 'Nazmus Sakib',
      year: '4th Year, 2st Semester',
      department: 'ICT',
      university: 'MBSTU',
      image:
        'https://i.postimg.cc/mkCVTsM5/Whats-App-Image-2025-05-26-at-11-59-46-067f033d.jpg',
      portfolio: 'https://mern-portfolio-shakib.vercel.app/',
    },
    {
      name: 'Md Asadul Islam',
      year: '4th Year, 2st Semester',
      department: 'ICT',
      university: 'MBSTU',
      image: 'https://i.postimg.cc/28Wg5prm/profile.jpg',
      portfolio: 'https://asad-dev-portfolio.web.app/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-extrabold text-center mb-4 md:mb-8">
        Meet Our Developers
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-500"
            />
            <h2 className="text-xl font-bold text-gray-800">{dev.name}</h2>
            <p className="text-gray-600">{dev.year}</p>
            <p className="text-gray-600">{dev.department}</p>
            <p className="text-gray-600">{dev.university}</p>
            <a
              href={dev.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-[#1B1F3B] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Portfolio
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowDevelopers;
