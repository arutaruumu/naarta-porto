"use client";

import React from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function HomePage() {
  return (
    <main
      className={`min-h-screen bg-gray-900 text-white font-sans ${inter.variable} font-sans`}
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-extrabold mb-4 leading-tight tracking-wide">
                MOPHISTO
              </h1>
              <p className="text-lg text-orange-500 mb-6 font-semibold tracking-wider">
                UNKNOWN ENTITY
              </p>
              <p className="text-gray-400 leading-relaxed tracking-wide">
                A mysterious figure shrouded in darkness, embodying the unknown.
                Explore the enigma and unravel the secrets.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* Hero image */}
              <div className="rounded-lg overflow-hidden h-80 w-full">
                <img
                  src="/file.svg"
                  alt="Hero"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Info Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
            <img
              src="/globe.svg"
              alt="Entity 01"
              className="w-24 h-24 mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold mb-2 tracking-wide">01</h2>
            <h3 className="text-2xl font-bold mb-4 tracking-wide">
              UNKNOWN ENTITY
            </h3>
            <p className="text-gray-400 tracking-wide text-center">
              The first entity in the series, cloaked in mystery and shadows.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
            <img
              src="/next.svg"
              alt="Entity 02"
              className="w-24 h-24 mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold mb-2 tracking-wide">02</h2>
            <h3 className="text-2xl font-bold mb-4 tracking-wide">
              UNKNOWN ENTITY
            </h3>
            <p className="text-gray-400 tracking-wide text-center">
              The second entity, a figure of intrigue and enigma.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
            <img
              src="/vercel.svg"
              alt="Entity 03"
              className="w-24 h-24 mb-4 object-contain"
            />
            <h2 className="text-xl font-semibold mb-2 tracking-wide">03</h2>
            <h3 className="text-2xl font-bold mb-4 tracking-wide">
              UNKNOWN ENTITY
            </h3>
            <p className="text-gray-400 tracking-wide text-center">
              The third entity, a shadowy presence with untold stories.
            </p>
          </div>
        </section>

        {/* Additional Content */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 tracking-wide">
            Explore the Unknown
          </h2>
          <p className="text-gray-400 max-w-3xl tracking-wide">
            Dive deep into the lore and discover the secrets behind each entity.
            This journey will take you through shadows and light, revealing the
            hidden truths.
          </p>
        </section>

        {/* New Detailed Section */}
        <section className="bg-gray-800 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 tracking-wide">
                The Enigma of MOPHISTO
              </h3>
              <p className="text-gray-400 tracking-wide leading-relaxed">
                MOPHISTO represents the unknown, a shadowy figure that defies
                explanation. Its presence is felt but rarely seen, a mystery
                waiting to be unraveled by those brave enough to seek the truth.
              </p>
            </div>
            <div>
              <img
                src="/window.svg"
                alt="MOPHISTO Enigma"
                className="rounded-lg object-cover w-full h-64"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
