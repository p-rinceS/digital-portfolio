import { FaDownload, FaPencil, FaGithub    } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";


const SideBar = () => { 
return(
<div className='fixed top-0 left-0 h-screen w-24 flex flex-col bg-primary drop-shadow-lg text-gray-600        '>

{/* add icons as more stuff needs to be added */}
<SideBarIcon icon={<FaDownload size = "40" />} />
<SideBarIcon icon={<FaPencil size = "40"/>} />
<SideBarIcon icon={<FaGithub  size = "40"/>} />
<SideBarIcon icon={<IoMailSharp   size = "40"/>} />


</div>
);
};



const SideBarIcon = ({icon}) => (

    <div className="sidebar-icon">   
        {icon}
    </div>

);


export default SideBar;