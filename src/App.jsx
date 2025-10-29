import React from "react";
import profilePic from "./assets/profile.jpg"; // put your image in src/assets/

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-10">
      {/* Profile Card */}
      <div className="card w-full md:w-2/3 lg:w-1/2 bg-base-100 shadow-xl p-8 rounded-2xl text-center">
        <figure className="mb-6">
          <img
            src={profilePic}
            alt="Ogo Anthony Chinedu"
            className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-primary"
          />
        </figure>

        <h1 className="text-3xl font-bold text-primary mb-3">
          Ogo Anthony Chinedu
        </h1>

        <p className="text-lg font-medium text-gray-700 mb-4">
          Software Engineer / UI Engineer | Website Developer | Python Frontend & Backend Engineer
        </p>

        <div className="space-y-1 text-gray-600">
          <p>📍 Enugu, Nigeria</p>
          <p>📞 +2347080143370 | +2348137429301</p>
          <p>✉️ ogohchineduanthony@gmail.com</p>
          <a
            href="https://github.com/Captchaman"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            GitHub: Captchaman
          </a>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 w-full md:w-2/3 lg:w-3/4">
        <div className="card bg-base-100 shadow-md">
          <figure>
            <img src="https://picsum.photos/400/300?random=1" alt="UI Work" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">UI Design Project</h2>
            <p>Creative front-end interface for a modern web app.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <figure>
            <img src="https://picsum.photos/400/300?random=2" alt="Backend Work" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Backend API</h2>
            <p>Robust Django + Python backend architecture.</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <figure>
            <img src="https://picsum.photos/400/300?random=3" alt="Fullstack" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fullstack Website</h2>
            <p>Complete responsive portfolio website with animations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
