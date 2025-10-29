import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-base-200 font-sans">
      {/* Header / Profile Section */}
      <header className="bg-base-100 shadow-md">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between p-6">
          <div className="flex items-center space-x-4">
            <img
              src="./profile.jpg"
              alt="Ogo Anthony Chinedu"
              className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div>
              <h1 className="text-3xl font-bold">Ogo Anthony Chinedu</h1>
              <p className="text-sm text-gray-500">
                Software Engineer / UI Engineer | Python Frontend & Backend
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="https://github.com/Captchaman"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary hover:btn-secondary transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto my-12 p-6 bg-base-100 rounded-2xl shadow-lg transform transition-transform hover:scale-[1.01] duration-300">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-2">
          I’m a Software Engineer and UI Developer from Enugu, Nigeria. I build modern, responsive websites and web apps with React, Python, and full-stack technologies.
        </p>
        <p>
          Contact me at: <strong>ogohchineduanthony@gmail.com</strong> <br/>
          Phone: <strong>+2347080143370 | +2348137429301</strong>
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto my-12 p-6">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300 hover:shadow-2xl">
            <img src="./project1.jpg" alt="Project 1" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Project One</h3>
              <p className="text-sm text-gray-600">
                A web application built with React and Tailwind CSS.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300 hover:shadow-2xl">
            <img src="./project2.jpg" alt="Project 2" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Project Two</h3>
              <p className="text-sm text-gray-600">
                Backend API development using Python and Django REST framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto my-12 p-6 bg-base-100 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          <span className="badge badge-primary transition-all duration-300 hover:badge-secondary">React</span>
          <span className="badge badge-primary hover:badge-secondary transition-all duration-300">Tailwind CSS</span>
          <span className="badge badge-primary hover:badge-secondary transition-all duration-300">daisyUI</span>
          <span className="badge badge-primary hover:badge-secondary transition-all duration-300">Python</span>
          <span className="badge badge-primary hover:badge-secondary transition-all duration-300">Django</span>
          <span className="badge badge-primary hover:badge-secondary transition-all duration-300">REST API</span>
          <span className="badge badge-primary hover:badge-secondary transition-all duration-300">HTML/CSS</span>
          <span className="badge badge-primary hover:badge-secondary transition-all duration-300">JavaScript</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-100 text-center p-6 mt-12 shadow-inner">
        <p>© 2025 Ogo Anthony Chinedu. All rights reserved.</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
