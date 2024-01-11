import { IoLogoHtml5 } from "react-icons/io";
import { SiTailwindcss, SiJavascript, SiCplusplus, SiGit, SiNextdotjs, SiVisualstudio, SiFsharp } from "react-icons/si";
import { FaPython, FaReact , FaJava } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";


const TechnologyBar = () => {
    return (
      <div className="py-2  flex flex-wrap drop-shadow-lg text-white bg-techbar rounded-lg  justify-center border-2 border-bordercolor hover:border-borderhover
      transition-all duration-300 ease-in-out">
        {/* add icons as more stuff needs to be added */}
        <TechBarIcons icon={<IoLogoHtml5 size="29" />} text={"HTML"} />
        <TechBarIcons icon={<DiCss3 size="45" />} text={"CSS"} />
        <TechBarIcons icon={<SiCplusplus size="40" />} text={"C++"} />
        <TechBarIcons icon={<SiTailwindcss size="40" />} text={"Tailwind CSS"} />
        <TechBarIcons icon={<SiJavascript size="40" />} text={"JavaScript"} />
        <TechBarIcons icon={<FaReact size="40" />} text={"React.js"} />
        <TechBarIcons icon={<SiNextdotjs size="40" />} text={"Next.js"} />
        <TechBarIcons icon={<FaPython size="40" />} text={"Python"} />
        <TechBarIcons icon={<FaJava size="40" />} text={"Java"} />
        <TechBarIcons icon={<SiFsharp size="40" />} text={"F#"} />
        <TechBarIcons icon={<SiGit size="40" />} text={"Git"} />
        <TechBarIcons icon={<SiVisualstudio size="40" />} text={"Visual Studio"} />
    
        
      </div>
    );
  };

  const TechBarIcons = ({ icon, text = "tooltip" }) => (
    <div className="techbar-icon group">
      {icon}
  
      <span className="techbar-tooltip group-hover:opacity-100">
        {text}
      </span>
    </div>
  );


  export default TechnologyBar;