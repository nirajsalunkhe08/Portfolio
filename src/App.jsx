import  { useState } from 'react';
import './App.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');

  // --- PERSONAL INFO ---
  const personalInfo = {
    name: "Niraj Mahendra Salunkhe",
    title: "Cloud Enthusiast | DevOps | CyberSecurity ",
    degree: "B.Sc. Computer Science, University of Mumbai",
    email: "nirajsalunkhe08@gmail.com",
    github: "https://github.com/nirajsalunkhe08",
    linkedin: "https://www.linkedin.com/in/niraj-salunkhe-947113263/",
  };

  // --- SKILLS ---
 const skills = [
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, IAM)",
      "Cloud Computing",
      "Docker (Basics)",
      "Linux Administration",
      "CI/CD Concepts",
    ],
  },
  {
    category: "Programming & Scripting",
    items: [
      "Python",
      "JavaScript",
      "Shell Scripting",

    ],
  },
  {
    category: "Cybersecurity & Networking",
    items: [
      "Network Intrusion Detection (NIDS)",
      "Basic Network Security",
      "Autopsy Tool",
      "TCP/IP Fundamentals",
    ],
  },
];


  // --- PROJECTS ---
  const projects = [
    {
      title: "Food & Grocery Delivery System",
      type: "Full Stack Web App",
      tech: "MERN Stack, AWS",
      desc: "A scalable e‑commerce platform with admin dashboard, image uploads, and advanced order management.",
      link: "https://github.com/nirajsalunkhe08/SalunkheMart_Full-stack",
    },
   // {
   //   title: "AI Chat with PDF (RAG)",
    //  type: "AI Application",
    //  tech: "Python, Streamlit, LangChain, Groq API",
    //  desc: "Upload PDFs and ask natural language questions using Retrieval‑Augmented Generation.",
    //  link: "https://github.com/nirajsalunkhe08",
   // },
    {
      title: "DevSync – Realtime Cloud Sync",
      type: "Cloud & DevOps Project",
      tech: "AWS, Node.js, WebSockets, Docker",
      desc: "A real-time cloud file synchronization system that enables instant data updates across multiple clients using scalable cloud infrastructure and event-driven architecture.",
      link: "https://github.com/nirajsalunkhe08/DevSync", 
  },

    {
      title: "Network Intrusion Detection System",
      type: "Cybersecurity Tool",
      tech: "Python, Scapy",
      desc: "Monitors network traffic and detects suspicious anomalies using signature‑based detection.",
      link: "https://github.com/nirajsalunkhe08",
    },
  ];

  const tabs = ['home', 'projects', 'skills', 'contact'];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <h1 className="text-xl font-bold">Niraj.dev</h1>
        <div className="flex gap-4">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`capitalize px-3 py-1 rounded-lg transition ${
                activeTab === item ? 'bg-blue-600' : 'hover:bg-slate-800'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      {activeTab === 'home' && (
        <section className="flex flex-col items-center justify-center text-center px-6 py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">{personalInfo.name}</span>
          </h2>
          <p className="text-lg text-slate-300 mb-2">{personalInfo.title}</p>
          <p className="text-slate-400 mb-6">{personalInfo.degree}</p>
          <p className="max-w-xl text-slate-400 mb-8">
            Passionate about building scalable web applications, securing networks,
            and deploying cloud‑based solutions using modern technologies.
          </p>

          <button
            onClick={() => setActiveTab('projects')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl font-medium transition"
          >
            View My Projects
          </button>
        </section>
      )}

      {/* PROJECTS */}
      {activeTab === 'projects' && (
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => window.open(project.link, '_blank')}
                className="cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title} ↗</h3>
                <span className="text-xs bg-blue-600 px-2 py-1 rounded">
                  {project.type}
                </span>
                <p className="text-sm text-slate-400 mt-3">
                  <strong>Stack:</strong> {project.tech}
                </p>
                <p className="text-slate-400 mt-2">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SKILLS */}
      {activeTab === 'skills' && (
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{group.category}</h3>
                <ul className="space-y-2 text-slate-400">
                  {group.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT */}
      {activeTab === 'contact' && (
        <section className="px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-400 mb-8">
            I am open to opportunities in Cloud Engineering,
             DevOps and Cybersecurity roles.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl"
            >
              Email Me
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-600 px-6 py-2 rounded-xl hover:bg-slate-800"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-600 px-6 py-2 rounded-xl hover:bg-slate-800"
            >
              LinkedIn
            </a>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="text-center text-slate-500 py-6 border-t border-slate-800">
        © {new Date().getFullYear()} Niraj Mahendra Salunkhe. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
