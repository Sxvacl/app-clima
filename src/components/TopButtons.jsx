import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Chañaral",
    },
    {
      id: 2,
      title: "Santiago",
    },
    {
      id: 3,
      title: "San Antonio, CL",
    },
    {
      id: 4,
      title: "Antofagasta",
    },
    {
      id: 5,
      title: "Panguipulli",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
