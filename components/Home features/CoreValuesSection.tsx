import React from "react";

// Core Values Section (PARRA)
export default function CoreValuesSection() {
  const values = [
    {
      title: "Peace",
      description:
        "We foster harmony in our workplace and with our clients, creating an environment where innovation thrives.",
    },
    {
      title: "Adventure",
      description:
        "We embrace new challenges and explore uncharted territories in technology to deliver groundbreaking solutions.",
    },
    {
      title: "Resilience",
      description:
        "We persist through challenges and setbacks, always working toward our vision of African technological excellence.",
    },
    {
      title: "Respect",
      description:
        "We honor the diverse perspectives of our team and clients, creating solutions that serve all stakeholders.",
    },
    {
      title: "Achievement",
      description:
        "We are committed to excellence and celebrate both individual and collective accomplishments.",
    },
  ];

  return (
    <section className="py-20 bg-bg">
      <div className="container mx-auto px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-text">
          Our Core Values (PARRA)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {value.title}
              </h3>
              <p className="text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
