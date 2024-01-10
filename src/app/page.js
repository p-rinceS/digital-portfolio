import Image from "next/image";
import Logo from "./components/Logo";
import SideBar from "./components/SideBar";
import Bio from "./components/Bio";


export default function Home() {
  return (
    <main className="bg-gradient-to-bl from-gray-900 to-primary min-h-screen">

      <head>
        <title>Prince's Portfolio</title>
        <meta name="description"></meta>
      </head>

        <div>


        <SideBar /> 
        <Bio />  

        </div>
      </main>

  );
}
