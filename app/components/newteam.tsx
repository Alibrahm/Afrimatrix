const Team = () => {
  const teamMembers = [
    {
      img: "https://picsum.photos/id/1011/800/450",
      title: "This is some title",
      description:
        "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.",
    },
    {
      img: "https://picsum.photos/id/1005/800/450",
      title: "This is some title",
      description:
        "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.",
    },
    {
      img: "https://picsum.photos/id/103/800/450",
      title: "This is some title",
      description:
        "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.",
    },
    {
      img: "https://picsum.photos/id/103/800/450",
      title: "This is some title",
      description:
        "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.",
    },
    {
      img: "https://picsum.photos/id/103/800/450",
      title: "This is some title",
      description:
        "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta.",
    },
  ];

  return (
    <section className="grid max-w-7xl mx-auto px-6 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <article
          key={index}
          className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
        >
          <figure className="overflow-hidden">
            <img
              src={member.img}
              alt={member.title}
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
            />
          </figure>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {member.title}
            </h2>
            <p className="text-gray-600 mb-4">{member.description}</p>
            <a
              href="#"
              className="inline-flex items-center text-teal-600 font-medium hover:underline"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Team;
