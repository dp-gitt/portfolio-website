"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/data/types";

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="py-24 px-6 relative bg-default-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-xl md:text-4xl font-bold mb-2 tracking-tight">
                        Personal Projects
                    </h2>
                    <p className="text-xl text-default-500 max-w-2xl">
                        A collection of technical projects I've built. Click on each one!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onClick={setSelectedProject} 
                        />
                    ))}
                </div>
            </div>

            {/* Modal Layer */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
}