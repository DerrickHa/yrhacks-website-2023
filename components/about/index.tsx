import React from "react";

const About = () => {
  return (
    <main
      id="about"
      className="w-screen h-screen flex flex-col justify-center items-start bg-slate-50 px-5 md:px-10 lg:px-48"
    >
      <h2 className="text-4xl text-slate-950 font-bold">Who are we?</h2>
      <div>
        <p className="w-full text-xl text-slate-950 font-semibold my-5">
          A YRDSB <span className="gradient-teal font-bold">Hackathon</span> run
          by students for students!
        </p>
      </div>
    </main>
  );
};

export default About;
