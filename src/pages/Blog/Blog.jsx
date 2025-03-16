
const Blog = () => {
  // Sample blog data with Bangladesh places
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring the World of Travel in Bangladesh',
      date: 'March 10, 2024',
      description:
        'Traveling opens doors to new experiences, cultures, and memories. Here’s why you should start planning your next adventure to Bangladesh.',
      image: '/assets/carousel/Ocean Breeze Resort.jpg',
      places: [
        {
          name: 'Sundarbans',
          description:
            'The world’s largest mangrove forest and home to the Royal Bengal Tiger.',
        },
        {
          name: 'Cox’s Bazar',
          description:
            'Famous for having the longest unbroken sea beach in the world.',
        },
        {
          name: 'Srimangal',
          description:
            'Known as the ‘Tea Capital’ of Bangladesh, famous for its tea gardens.',
        },
        {
          name: 'Rangamati',
          description:
            'A beautiful hill station with lakes and traditional tribal culture.',
        },
        {
          name: 'Bandarbans',
          description:
            'The home of breathtaking hills, waterfalls, and indigenous culture.',
        },
      ],
    },
    {
      id: 2,
      title: 'Top 10 Budget-Friendly Travel Destinations in Bangladesh',
      date: 'March 5, 2024',
      description:
        'Looking to travel in Bangladesh on a budget? Here are the top 10 destinations where you can explore without breaking the bank.',
      image: '/assets/carousel/Misty Hills Tea Resort.webp',
      places: [
        {
          name: 'Sreemangal',
          description:
            'Known for its peaceful environment and low-cost attractions like tea gardens and forest walks.',
        },
        {
          name: 'Cox’s Bazar',
          description:
            'Affordable with plenty of budget hotels and cheap seafood, perfect for a beach getaway.',
        },
        {
          name: 'Rangamati',
          description:
            'A beautiful and affordable place for nature lovers, with lakes and tribal culture.',
        },
        {
          name: 'Patiya',
          description:
            'An off-the-beaten-path destination near Chittagong, offering scenic beauty at a low cost.',
        },
        {
          name: 'Kuakata',
          description:
            'Known for its beach, where you can watch both sunrise and sunset, perfect for a budget trip.',
        },
      ],
    },
    {
      id: 3,
      title: 'How to Explore Bangladesh Like a Local',
      date: 'February 28, 2024',
      description:
        'Want to explore Bangladesh beyond the tourist hotspots? Here’s how you can travel like a local and experience the true essence of the country.',
      image: '/assets/carousel/Sajek Valley Retreat.jpg',
      places: [
        {
          name: 'Sajek Valley',
          description:
            'A remote hill station in the Bandarban district, perfect for a peaceful getaway.',
        },
        {
          name: 'Saint Martin’s Island',
          description:
            'A tiny coral island in the Bay of Bengal, offering crystal-clear water and a laid-back vibe.',
        },
        {
          name: 'Tanguar Haor',
          description:
            'A UNESCO Ramsar Wetland site, ideal for birdwatching and tranquil boat rides.',
        },
        {
          name: 'Kaptai Lake',
          description:
            'A serene lake surrounded by hills and forests in Rangamati, perfect for boat tours.',
        },
        {
          name: 'Chunati Wildlife Sanctuary',
          description:
            'A wildlife reserve located in the Chittagong region, ideal for nature and wildlife enthusiasts.',
        },
      ],
    },
    {
      id: 4,
      title: 'The Best Cultural Experiences in Bangladesh',
      date: 'February 15, 2024',
      description:
        'From ancient temples to vibrant festivals, discover the best cultural experiences Bangladesh has to offer.',
      image: '/assets/carousel/Riverside Serenity Lodge.jpg',
      places: [
        {
          name: 'Mahasthangarh',
          description:
            'An ancient archaeological site with ruins from the 3rd century BC, located near Bogura.',
        },
        {
          name: 'Tajhat Palace',
          description:
            'A beautiful 20th-century palace located in Rajshahi, known for its grandeur and historical importance.',
        },
        {
          name: 'Ahsan Manzil',
          description:
            'A magnificent historical palace in Dhaka, offering insights into the colonial era.',
        },
        {
          name: 'Jaflong',
          description:
            'Known for its tea gardens, hills, and peaceful environment, it’s a great place for cultural exploration.',
        },
        {
          name: 'Lalbagh Fort',
          description:
            'A Mughal fort in Dhaka that showcases the grandeur of the Mughal era in Bangladesh.',
        },
      ],
    },
    {
      id: 5,
      title: 'Discovering the Natural Beauty of Bangladesh',
      date: 'January 28, 2024',
      description:
        'Bangladesh is a land of natural beauty, from its mountains and hills to its rivers and beaches. Let’s explore the best natural spots.',
      image: '/assets/carousel/Misty Hills Tea Resort.webp',
      places: [
        {
          name: 'Sundarbans',
          description:
            'A UNESCO World Heritage Site known for its biodiversity, especially the Bengal Tiger.',
        },
        {
          name: 'Rangamati',
          description:
            'A serene hill station with beautiful lakes and tribal culture.',
        },
        {
          name: 'Cox’s Bazar',
          description:
            'With its 120km beach, it is one of the longest unbroken sandy beaches in the world.',
        },
        {
          name: 'Bandarbans',
          description:
            'Famous for its scenic hills and lush green forests, perfect for nature lovers.',
        },
        {
          name: 'Kaptai Lake',
          description:
            'A peaceful lake surrounded by forested hills, ideal for a calm retreat.',
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-8 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1B1F3B]">
        Our Blog
      </h1>

      {/* Blog Posts */}
      <div className="mt-8 space-y-12">
        {blogPosts.map(post => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 border p-6 shadow-lg rounded-lg"
          >
            <div className="md:w-1/2">
              <img
                src={post.image}
                alt={post.title}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-[#1B1F3B]">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-2">{post.date}</p>
              <p className="text-lg text-gray-700 mt-4">{post.description}</p>
              <h3 className="text-xl font-semibold text-[#1B1F3B] mt-6">
                Top Destinations in Bangladesh:
              </h3>
              <ul className="list-disc pl-6 mt-4">
                {post.places.map((place, index) => (
                  <li key={index} className="text-lg text-gray-700">
                    <strong>{place.name}:</strong> {place.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
