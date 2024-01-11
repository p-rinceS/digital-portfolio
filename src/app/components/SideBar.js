'use client';

import { FaDownload, FaPencil, FaGithub } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLogoLinkedin, IoMdDocument } from "react-icons/io";
import React, {useState} from "react"; 
const SideBar = () => {


  return (
    <div>
      <div className={`fixed -top-0 -left-0 h-screen w-24 flex flex-col drop-shadow-lg text-gray-600 bg-gradient-to-b from-primary to-glow z-10 lg:block hidden`}>
        {/* add icons as more stuff needs to be added */}
        <a href="https://drive.google.com/file/d/12wdmYWjBfqxWN-XyPMK7HqMSSksF6ohO/view?usp=sharing" target="_blank">
          <SideBarIcon icon={<IoMdDocument size="40" />} text={"CV/Resume"} />
        </a>
        <a href= "https://www.linkedin.com/in/psonani" target = "_blank">
        <SideBarIcon icon={<IoLogoLinkedin size="40" />} text={"LinkedIn"} />
        </a>
        <a href = "https://github.com/p-rinceS" target = "_blank">
        <SideBarIcon icon={<FaGithub size="40" />} text={"GitHub"} />
        </a>
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
