'use client';

import React, { useState, useEffect } from "react";

export default function Secret() {
    const [showSources, setShowSources] = useState(false);

    const sources = [
        "https://www.streameast.gd/main-event/ufc/946440",
        "https://crackstreams.cx/live-event/ufc-312-du-plessis-vs-strickland-2-live-stream",
        "https://methstreams.cx/live-event/ufc-312-du-plessis-vs-strickland-2-live-stream",
        "https://1stream.eu/title-game/ufc/ufc-312-du-plessis-vs-strickland-2-live-stream/9560",
        "https://givemeredditstreams.xyz/mma/600050481/ufc-312-du-plessis-vs-strickland-2",
        "https://elixx.one/adortmund.html"
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowSources(true);
            } else {
                setShowSources(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <iframe frameBorder={0} height="700em" width="100%" src="https://givemereddit.eu/ufc/ufcstream.html"
                    allowFullScreen={true} scrolling="no" allowTransparency={true}>
            </iframe>
            <h1 className="p-10 font-bold">Other Options:</h1>
            <div className={`flex flex-wrap justify-center transition-opacity duration-1000 ${showSources ? 'opacity-100' : 'opacity-0'}`}>
                {sources.map((source, index) => (
                    <div key={index} className="bg-gray-700 m-2 p-4 rounded-lg shadow-lg w-64">
                        <p className="text-center mb-4">Source {index + 1}</p>
                        <a href={source} target="_blank" rel="noopener noreferrer">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                                Go to Source
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}