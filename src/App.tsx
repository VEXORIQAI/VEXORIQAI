import React from "react";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">✦ VEXORIQ<span> AI</span></div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="nav-btn">Get Started ↗</button>
      </nav>

      <section className="hero">
        <div className="badge">
          ✨ THE FUTURE OF DIGITAL CREATIVITY
        </div>

        <h1>
          Imagine Beyond
          <span> Limits.</span>
        </h1>

        <p>
          Transform your imagination into reality.
          <br />
          Create, design and build with the power of AI.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Explore VEXORIQ ↗</button>
          <button className="secondary-btn">Discover More</button>
        </div>

        <div className="visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="core">V</div>
          <div className="floating f1">✦ AI</div>
          <div className="floating f2">✧ CREATE</div>
          <div className="floating f3">✦ DESIGN</div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Build Without Limits</h2>
        <p>One vision. Infinite possibilities.</p>

        <div className="cards">
          <div className="card">
            <span>✦</span>
            <h3>AI Creativity</h3>
            <p>Turn your ideas into creative digital experiences.</p>
          </div>

          <div className="card">
            <span>◈</span>
            <h3>Smart Design</h3>
            <p>Explore modern design concepts and possibilities.</p>
          </div>

          <div className="card">
            <span>⌘</span>
            <h3>Digital Building</h3>
            <p>Bring your vision to life with technology.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>Imagine. Design. Build.</h2>
        <p>
          VEXORIQ AI is an upcoming digital creativity platform
          designed to make innovation accessible.
        </p>
      </section>

      <footer id="contact">
        <div className="logo">✦ VEXORIQ AI</div>
        <p>Created by Ishant V Naik</p>
        <p>© 2026 VEXORIQ AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
