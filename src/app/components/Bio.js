import TechnologyBar from "./TechnologyBar";
import SpotifyBar from "./Spotify";
import ProjectTiles from "./ProjectTiles";
import Contact from "./Contact";
import Discord from "./Discord";

const Bio = () => {
  return (
    <div className="flex flex-wrap justify-center px-5 w-full" id="hero">
      <div className="flex flex-col justify-center text-left">
        <div class="relative flex-col">
        <Discord />

          <h1 className="mb-10 text-6xl text-white">Hey I'm Prince 👋</h1>
        </div>{" "}
        <p className="  max-w-3xl text-lg  text-white  overflow-hidden">
          I'm a junior software engineer from Chicago. I'm currently pursuing
          full-stack web development to create stunning user experiences on the
          front-end, and scalable and secure infrastructure on the backend.
        </p>
        <h2 className=" text-xl font-semibold  mt-5  text-white">
          What I Do 💭
        </h2>
        <p className="  max-w-3xl text-lg  text-white overflow-hidden">
          I have a deep passion for various aspects of technology, ranging from
          software design and development to unraveling the intricate workings
          of the internet. My interests extend to cybersecurity, programming,
          and beyond. Every day, I am driven to expand my knowledge, aiming to
          comprehend the inner workings and underlying principles that govern
          the technology shaping our world.
        </p>
        <h2 className=" text-xl font-semibold  mt-5  text-white">
          Technologies 💻
        </h2>
        <p className=" justify-between max-w-3xl text-lg  text-white  flex ">
          I use a variety of tools to streamline my development process and
          increase the quality of both my code, and my projects. Below is a list
          of technologies and languages I've had experience with in the past, or
          use currently.
        </p>
        <TechnologyBar />
        <h2 className=" text-xl font-semibold  mt-10  text-white">
          Projects 🛠️
        </h2>
        <p className=" justify-between max-w-3xl text-lg  text-white  flex ">
          In my free time, I enjoy creating projects to post on GitHub, so I can
          learn from others and share what I know. I am often working on
          learning frameworks and libraries. Some of these projects are listed
          below.
        </p>
        <ProjectTiles />
        <Contact />
      </div>
    </div>
  );
};

export default Bio;
