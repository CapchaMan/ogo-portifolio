import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-10 font-sans">
      {/* Header Section */}
      <header className="text-center mb-10">
        <img
          src="./profile.jpg"
          alt="Ogo Anthony Chinedu"
          className="w-32 h-32 rounded-full shadow-md object-cover mx-auto mb-4 border-4 border-blue-500"
        />
        <h1 className="text-3xl font-bold text-gray-800">
          Ogo Anthony Chinedu
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Software Engineer / UI Engineer | Website Developer | Python Frontend & Backend Engineer
        </p>
      </header>

      {/* Contact Info */}
      <section className="text-center text-gray-700 mb-10">
        <p>📍 Enugu, Nigeria</p>
        <p>📞 +2347080143370 | +2348137429301</p>
        <p>✉️ ogohchineduanthony@gmail.com</p>
      </section>

      {/* Links Section */}
      <section className="flex flex-col items-center space-y-4">
        <a
          href="https://github.com/CapchaMan"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          🌐 Visit My GitHub Portfolio
        </a>

        <a
          href="https://www.figma.com/make/2RQ1ycTxzHmpEa8DrMpckc/Share-UI-Design-Showcase?node-id=0-1&t=awS4FREXeY3eSv0U-1"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          🎨 View My Figma UI/UX Design Showcase
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Ogo Anthony Chinedu. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;


