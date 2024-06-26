const ProjectTiles = () => {
  return (
    <div className=" flex flex-wrap">
      <div className="flex flex-col ">
        <div className="flex flex-wrap justify-center">
          <Tiles
            name="UIClassmate"
            description="🤖 discord bot, parses through and displays grade distribution data @ UIC."
            language="🔵 Python"
            link="https://github.com/p-rinceS/UIClassmate"
          ></Tiles>
          <Tiles
            name="digital-portfolio"
            description="💼 created using react and javascript w/ tailwind css"
            language="🟡 JavaScript"
            link="https://github.com/p-rinceS/digital-portfolio"
          ></Tiles>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <Tiles
            name="baccarat game"
            description="🃏 created using java and javafx, fully functional baccarat casino game, bet amount and win big or go home empty-handed"
            language="🟠 Java"
            link="https://github.com/p-rinceS/baccarat"
          ></Tiles>
          <Tiles
            name="word game"
            description="🔤created using javafx, wordle-based game with java networking, client-server connection"
            language="🟠 Java"
            link="https://github.com/p-rinceS/word-game"
          ></Tiles>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <Tiles
            name="idle-farming-simulator"
            description="🧑‍🌾 farming simulator game made using proper agile & scrum methodologies to efficiently complete 4-week sprints."
            language="🔵 Python"
            link=""
          ></Tiles>
        </div>
      </div>
    </div>
  );
};

const Tiles = ({
  name = "Enter Name",
  description = "Enter Description",
  language = "Enter Language",
  link = "Enter Link",
  extra = "Enter Extra",
}) => (
  <div
    className="ml-2 relative mt-2  flex h-40 w-96 max-w-[48] flex-row rounded-xl bg-techbar bg-clip-border text-gray-700 shadow-md border-2 border-bordercolor
    hover:scale-105
  hover:border-borderhover transition-all duration-200"
  >
    <div className="p-6">
      <h6 className="absolute top-1 left-3 block font-sans text-base font-semibold   tracking-normal text-white ">
        {name}
      </h6>

      <p className=" absolute top-2 left-3 block font-Lato text-base font-light text-opacity-50 leading-relaxed text-white antialiased">
        {description}
      </p>
      <p className=" absolute  left-3 -bottom-5 block font-Lato  text-sm font-extralight leading-relaxed text-white antialiased">
        {language}
      </p>
      <div className="github-link">
        <p className=" absolute  right-3 -bottom-5 block font-Lato text-sm font-semibold leading-relaxed text-white antialiased">
          <a href={link} target="_blank">
            {" "}
            more info ➝
          </a>
        </p>
      </div>
    </div>
  </div>
);
export default ProjectTiles;
