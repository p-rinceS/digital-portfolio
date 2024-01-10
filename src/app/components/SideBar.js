import { FaDownload, FaPencil, FaGithub } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLogoLinkedin, IoMdDocument } from "react-icons/io";

const SideBar = () => {
  return (
    <div className="fixed -top-0 -left-0 h-screen w-24 flex flex-col  drop-shadow-lg text-gray-600 bg-gradient-to-b from-primary to-glow      ">
      {/* add icons as more stuff needs to be added */}
      <SideBarIcon icon={<IoMdDocument size="40" />} text={"CV/Resume"} />
      <SideBarIcon icon={<IoLogoLinkedin size="40" />} text={"LinkedIn"} />
      <SideBarIcon icon={<FaGithub size="40" />} text={"GitHub"} />
      <SideBarIcon icon={<IoMailSharp size="40" />} text={"Contact Me"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip  -z-10 group-hover:translate-x-32 group-hover:opacity-100 group-hover:rounded-md ">
      {text}
    </span>
  </div>
);

export default SideBar;
