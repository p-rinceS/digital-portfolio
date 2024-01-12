"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "./components/Logo";
import SideBar from "./components/SideBar";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HashRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

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
        <Router>
          <Routes>
            <Route exact path="/" element={<Bio />}></Route>
            <Route exact path="contact" element={<Contact />}></Route>
          </Routes>
          </Router>
        </div>
        <Footer />
      </main>
    
  );
}
