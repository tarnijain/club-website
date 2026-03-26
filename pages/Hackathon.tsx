import React, { useState } from "react";

const Hackathon = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen text-white px-6 py-10 pt-28">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        🚀 GFG Hackathon 2026
      </h1>

      {/* 🔥 DASHBOARD BUTTONS */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {["overview", "timeline", "prizes", "projects"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg capitalize transition-all ${
              activeTab === tab
                ? "bg-green-600 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 🔥 CONTENT AREA */}
      <div className="max-w-3xl mx-auto text-center">

        {/* OVERVIEW */}
        {activeTab === "overview" && (
  <div className="text-left space-y-6 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
    
    <h2 className="text-2xl font-bold text-white">
      Where Innovation Meets Code – Welcome to GFG Hackathon 2026! 🚀
    </h2>

    <p className="text-gray-300">
      Step into a world where ideas turn into impact and code shapes the future.
    </p>

    <p className="text-gray-400">
      Organized by <span className="text-white font-semibold">GeeksforGeeks VIT Bhopal</span>, this hackathon is more than just a competition — it’s a high-energy, innovation-driven experience bringing together some of the brightest minds on campus.
    </p>

    <p className="text-gray-400">
      At GFG Hackathon 2026, every participant becomes a builder, a problem-solver, and a creator — transforming bold ideas into real-world solutions. 💡
    </p>

    <div className="space-y-3 mt-4">
      <p className="text-gray-300">⚡ Build innovative solutions across diverse domains</p>
      <p className="text-gray-300">🤝 Collaborate with passionate developers and designers</p>
      <p className="text-gray-300">🌐 Learn from mentors and experienced peers</p>
      <p className="text-gray-300">🏆 Compete for exciting prizes and recognition</p>
      <p className="text-gray-300">💬 Experience teamwork and rapid development</p>
    </div>

    <p className="text-gray-400 pt-2">
      Whether you're a beginner or a seasoned coder, this is your chance to push limits, explore new ideas, and create something extraordinary.
    </p>

    <p className="text-green-400 font-semibold text-lg">
      #BuildTheFuture 🚀
    </p>

  </div>
)}

        {/* TIMELINE */}
        {activeTab === "timeline" && (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm space-y-6">
    
    <h2 className="text-2xl font-bold text-white text-center">
      🗓️ Hackathon Timeline
    </h2>

    <p className="text-center text-gray-400">
      📅 April 2, 2026 • ⏰ 10:00 AM – 6:00 PM  
      <br />
      One-Day Hackathon Experience
    </p>

    {/* Timeline Steps */}
    <div className="space-y-4 mt-6">

      <div className="flex items-center gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <p className="text-gray-300">
          <span className="font-semibold text-white">10:00 AM</span> — Opening Ceremony & Kickoff
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <p className="text-gray-300">
          <span className="font-semibold text-white">11:00 AM</span> — Hacking Begins 💻
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <p className="text-gray-300">
          <span className="font-semibold text-white">2:00 PM</span> — Mid Evaluation / Mentor Check-in
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <p className="text-gray-300">
          <span className="font-semibold text-white">5:00 PM</span> — Final Submissions
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <p className="text-gray-300">
          <span className="font-semibold text-white">6:00 PM</span> — Results & Closing Ceremony 🏆
        </p>
      </div>

    </div>

  </div>
)}

        {/* PRIZES */}
        {activeTab === "prizes" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Prizes</h2>
            <p className="text-gray-400">
              🥇 To be announced | 🥈 To be announced | 🥉 To be announced
            </p>
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === "projects" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <p className="text-gray-400">
              Build solutions in AI, Web, Blockchain, or Open Innovation.
            </p>
          </div>
        )}

      </div>

      {/* 🚀 REGISTER BUTTON */}
      <div className="flex justify-center mt-16">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScSBtO2E4U3_Jb9I_9-P3P9RkqVtZiiOb6CBOlPGJxgrE54NQ/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/20 inline-block"
        >
          🚀 Register Now
        </a>
      </div>

    </div>  
  );
};

export default Hackathon;