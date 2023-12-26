import React from "react";

const Home = () => {
  return (
    <section id="home" className="home w-full  h-[90vh]">
      <div className="home-content w-full h-[90vh] flex justify-center items-center">
        <div className="content flex flex-col justify-center items-center">
          <h2 className="text-slate-50 text-4xl font-bold text-center">
            Greetings and welcome to My TourTrek App!{" "}
          </h2>
          <h1 className=" text-slate-50 text-6xl font-bold text-center">
            Visit <span class="country-name text-orange-500"></span>
          </h1>
          <p className="w-[90%] md:w-[60%] m-3 text-center text-slate-50">
            Embark on remarkable journeys where every destination unfolds as a
            new chapter in your personal narrative. Join us in exploring the
            world and redefine your travel experience..{" "}
          </p>
          <a
            href="#booking"
            class="px-4 py-2 my-4 bg-blue-700 text-slate-100 rounded-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
