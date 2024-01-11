import Image from "next/image";
import Logo from "./components/Logo";
import SideBar from "./components/SideBar";
import Bio from "./components/Bio";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-techbar min-h-screen">

      <head>
        <title>Prince's Portfolio</title>
        <meta name="description"></meta>
      </head>

        <div >

        
        <SideBar /> 
    

        </div>
        <div>
        <Bio />
        </div>
        <Footer />
      </main>

  );
}
