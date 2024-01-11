'use client';

import { FaDownload, FaPencil, FaGithub } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLogoLinkedin, IoMdDocument } from "react-icons/io";
import React, {useState} from "react"; 

const SideBar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div>
      <button onClick = {toggleSidebar} className="lg:hidden fixed top-0 right-0 m-2 z-20">
        Toggle Sidebar
      </button>
      <div className={`fixed -top-0 -left-0 h-screen w-24 flex flex-col ${isSidebarVisible ? '' : 'hidden'} lg:block drop-shadow-lg text-gray-600 bg-gradient-to-b from-primary to-glow z-10`}>
        {/* add icons as more stuff needs to be added */}
        <a href="CV">
          <SideBarIcon icon={<IoMdDocument size="40" />} text={"CV/Resume"} />
        </a>
        <SideBarIcon icon={<IoLogoLinkedin size="40" />} text={"LinkedIn"} />
        <SideBarIcon icon={<FaGithub size="40" />} text={"GitHub"} />
        <SideBarIcon icon={<IoMailSharp size="40" />} text={"Contact Me"} />
      </div>
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
