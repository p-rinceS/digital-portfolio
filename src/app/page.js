// Purpose: Main page for the portfolio, contains the sidebar, bio, and contact page

/**
* @jest-environment jsdom
*/


"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "./components/Logo";
import SideBar from "./components/SideBar";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function Home() {


  return (

      <main className="bg-gradient-to-b from-gray-900 to-techbar min-h-screen">
        <head>
          <title>Prince's Portfolio</title>
          <meta name="description"></meta>
        </head>

        <div>
          <SideBar />
        </div>


        <div className="main-page">
        {/* <Router>
          <Routes>
            <Route exact path="/" element={<Bio />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
          </Router> */}
          <Bio />
        </div>
        <Footer />
      </main>
    
  );
}
