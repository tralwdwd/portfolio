"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Client, TablesDB } from "appwrite"


export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])
  
  interface Project {
    title: string;
    description: string;
    source?: string;
    link?: string;
    image?: string;
  }

  useEffect(() => {
    async function fetchProjects() {
      let client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string) 
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);
      let database = new TablesDB(client);
      let res = await database.listRows({
        databaseId: "68b6dc490009c69f76ba",
        tableId: "projects",
      })
      setProjects(res.rows as unknown as Project[]);
    }
    fetchProjects();
  }, [])

  return (
    <div className="m-5">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-center text-2xl">
          "Programmers are the architects of the digital age. They build the systems, applications, and tools that shape our world, from the apps on our smartphones to the complex software running our businesses. Without programmers, the technology we rely on wouldn't exist. They solve problems, innovate, and bring ideas to life."
        </h3>
        <h1 className="text-3xl mb-1.5 font-bold mt-5">About Me</h1>
      <h3 className="text-xl text-center">At just 14 years old, I am a passionate and driven developer with hands-on experience in Go, Rust, JavaScript, Python, Flutter/Dart, as well as full-stack development. My journey in programming is fueled by curiosity and a relentless desire to build, learn, and innovate. I thrive on solving complex problems, exploring new technologies, and turning ideas into reality. With a strong foundation across multiple languages and frameworks, I am committed to continuous growth and making a positive impact through code. The future is bright, and I am just getting started.</h3>
      
      <h3 className="text-3xl mb-1.5 font-bold mt-5">My Work</h3>
      <div className="w-full max-w-5xl mt-8 max-h-[32rem] overflow-y-auto px-2">
        <ul className="space-y-8 flex items-center flex-col justify-center">
          {projects.map((project, idx) => (
            <li key={idx} className="border-2 border-spotify-green rounded-2xl p-6 bg-gradient-to-br from-[whitesmoke] via-[rgb(240,240,240)] to-[rgb(235,235,235)] dark:from-stone-700 dark:via-stone-800 dark:to-stone-900 shadow-xl w-full flex flex-col md:flex-row gap-6 md:gap-8 items-center hover:scale-[1.0] scale-[0.95] transition-transform duration-200">
  {project.image && (
    <div className="w-full md:w-[400px] aspect-video relative overflow-hidden rounded-xl shadow-lg border border-stone-500">
      <Image
        src={project.image}
        alt={project.title + ' project image'}
        fill
        className="object-cover"
        priority={idx === 0}
      />
    </div>
  )}
  <div className="flex flex-col justify-center flex-1 min-w-0">
    <h3 className="text-2xl font-bold mb-2 text-spotify-green">{project.title}</h3>
    <p className="mb-4 text-lg dark:text-stone-200">{project.description}</p>
    <div className="flex gap-4 flex-wrap">
      {project.link && (
        <a href={project.link} target="_blank" className="inline-block px-4 py-2 bg-spotify-green font-semibold rounded-lg shadow hover:bg-green-600 transition-colors">Live Website</a>
      )}
      {project.source && (
        <a href={project.source} target="_blank" className="inline-block px-4 py-2 bg-spotify-green font-semibold rounded-lg shadow hover:bg-green-600 transition-colors">View Source</a>
      )}
    </div>
  </div>
</li>
          ))}
        </ul>
      </div>
        <a href="https://github.com/tralwdwd" target="_blank" className="mt-4 flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-black bg-white rounded-[20px] hover:text-spotify-green transition-colors">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>My Github Page</span>
        </a>
        
      </div>
    </div>
  );
}
