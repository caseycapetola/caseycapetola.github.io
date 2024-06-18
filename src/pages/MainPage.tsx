// import React from "react";

// import InfoCard from "../components/InfoCard";
import headshot from "../assets/headshot.png";
import resume from "../assets/Capetola_Academic_Vita.pdf";

const MainPage = () => {
  return (
    <>
      <div className="h-screen bg-blue-950 text-white">
        <div className="grid grid-cols-2 grid-rows-1 items-center gap-4 p-16 pb-8 bg-blue-950 text-white">
          <div>
            <img
              src={headshot}
              width={300}
              height={300}
              className="rounded-full mx-auto w-30 border-white border-2 justify-center"
            />
          </div>
          <h1 className="text-left text-3xl md:text-5xl font-bold">
            Casey Capetola
            <h2 className="text-sm md:text-3xl font-normal">
              Associate Software Engineer
            </h2>
          </h1>
        </div>
        <div className="flex gap-2 pb-8 justify-center">
          <a href={resume} target="_blank">
            <svg
              className="w-10 h-10 justify-center text-zinc-400 hover:text-white transition-all duration-200 hover:cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="https://github.com/caseycapetola" target="_blank">
            <svg
              className="w-10 h-10 text-zinc-400 hover:text-white transition-all duration-200 hover:cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="https://linkedin.com/in/casey-capetola" target="_blank">
            <svg
              className="w-10 h-10 text-zinc-400 hover:text-white transition-all duration-200 hover:cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                clip-rule="evenodd"
              />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </a>
        </div>
        <div className="bg-blue-950 text-white">
          <h3 className="text-sm font-bold m-4 mb-6">About</h3>
          <div className="m-4 text-xs font-thin">
            <p className="mb-4">
              My journey in computer science started from a decision made on a
              whim in 2018. I always loved math, problem solving, and computers,
              so I thought, "why not take this intro to Java class?"
            </p>
            <p className="mb-4">
              Many years later, I have completed my Bachelor's degree in
              Computer Science, graduating from the Pennsylvania State
              University (We Are!). As an honors student, a spent considerable
              time studying and researching in the realm of theoretical computer
              science. This culminated in a written thesis, which you can read{" "}
              <a
                href="https://honors.libraries.psu.edu/catalog/8910cac6748"
                className="font-bold hover:underline"
                target="_blank"
              >
                here
              </a>
              !
            </p>
            <p className="mb-4">
              As a software engineer, my goal is to build technology that can
              benefit everyday people in their everyday lives. I want to use my
              knowledge and experience to make life easier for everyone.
            </p>
            <p className="mb-4">
              In my spare time, I try to stay as active as possible. I play
              soccer, and I serve as a volunteer wrestling coach. I love playing
              video games and spending time with my friends, and I'm always
              looking to learn something new!
            </p>
          </div>
        </div>

        <div className="bg-blue-950 text-white">
          <h3 className="text-sm font-bold m-4 mb-6 mt-6">Experience</h3>
          <div className="grid grid-cols-6 m-4 gap-y-8">
            <div className="col-span-2 text-xs font-thin opacity-60">
              Aug 2024-Present
            </div>
            <div className="col-span-4 text-xs">
              TDP Software Engineer - Capital One
              <br />
              <br />
              <p className="font-thin">TBD</p>
            </div>
            <div className="col-span-2 text-xs font-thin opacity-60">
              Jun 2023-Aug 2023
            </div>
            <div className="col-span-4 text-xs">
              TIP Software Engineer Intern - Capital One
              <br />
              <br />
              <p className="font-thin">
                Collaborated with a team of interns and engineers to design
                software to streamline analysis of relevant customer data.
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
};

export default MainPage;
