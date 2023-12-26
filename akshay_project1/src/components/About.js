import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="py-10 px-5 bg-blue-100">
        <h1 className="text-3xl text-center font-semibold uppercase pb-5">
          About
        </h1>
        <div className="block md:flex items-center justify-center">
          <img
            className="w-full md:w-[50%] p-2 sm:p-10 rounded-md aspect-video object-cover"
            src="https://wallpapers.com/images/hd/travel-hd-pi6mi8ghw8tpdtqu.jpg"
            alt="about-img"
          />
          <div className="w-full md:w-[50%]">
            <p className="my-4">
              Step into My TourTrek App, where we open doors to boundless travel narratives and effortless lodging arrangements. We grasp the essence that every expedition spins its own tale, and we're dedicated to making yours truly exceptional. Whether you're a seasoned globetrotter or stepping into the world of adventures for the first time, My TourTrek App stands by your side to curate your ideal escape.

At My TourTrek App, setting the bar at excellence isn't just a target; it's our everyday norm. We persistently push boundaries, keeping ahead of industry currents, fostering alliances with esteemed accommodations, and harnessing cutting-edge technology to elevate your booking journey.
            </p>

            <p className="my-4">
              At Travel Trips, excellence is not just a goal; it's a standard.
              We continuously strive to exceed your expectations by staying
              ahead of industry trends, partnering with reputable
              establishments, and leveraging technology to enhance your booking
              experience.
            </p>

            <button className="bg-blue-700 text-slate-100 px-3 py-2 rounded-md hover:bg-blue-800">
              View more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
