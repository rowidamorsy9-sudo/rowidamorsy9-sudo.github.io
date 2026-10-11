"use client"

import React, { useState } from 'react';
import GlareHover from './GlareHover';
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import { projectData } from '../data/projects';

// --- Single Project Card Component ---
const ProjectCard = ({ project }) => (
    <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1350}
        playOnce={true}
        width="100%"
        height="100%"
        background="#fff"
        borderRadius="16px"
        className="h-full"
        style={{ border: '1px solid #e5e7eb' }}
    >
        <div className="flex flex-col h-full bg-white rounded-[16px] overflow-hidden">
            {project.imageUrl ? (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-44 object-cover object-top"
                />
            ) : (
                <div className="w-full h-44 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-gray-100 text-gray-500 text-sm font-semibold">
                    <span className="text-3xl mb-1">🚧</span>
                    Coming Soon<span className="text-[11px] font-normal text-gray-400 mt-1">Project currently being prepared</span>
                </div>
            )}
            <div className="p-4 flex-grow flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    {project.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-grow">
                    {project.description}
                </p>
                <div className="text-xs text-gray-700 mb-3">
                    <span className="font-semibold">outcome:</span>{' '}
                    {project.outcome?.url ? (
                        <a href={project.outcome.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                            {project.outcome.label}
                        </a>
                    ) : (
                        project.outcome?.label
                    )}
                </div>
                <div className="flex items-center justify-start space-x-3 mt-auto pt-1">
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-semibold text-xs transition-colors duration-300"
                        >
                            View on GitHub ↗
                        </a>
                    )}
                    {project.comingSoon && (
                        <span className="text-gray-400 font-semibold text-xs">Coming Soon</span>
                    )}
                </div>
            </div>
        </div>
    </GlareHover>
);

// --- Main Projects Section Component ---
export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section
            id="projects"
            className="relative w-full text-black py-20 overflow-hidden bg-white"
        >
            <InteractiveGridPattern
                className={cn(
                    "absolute inset-0 h-full w-full",
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
                )}
                width={20}
                height={20}
                squares={[80, 80]}
                squaresClassName="fill-gray-100"
            />

            <div className="relative z-10 px-2">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            Projects 🚀
                        </Highlighter>
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                    {displayedProjects.map((project) => (
                        <div key={project.title}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-500 mt-10">
                    More code and in-progress work on{' '}
                    <a
                        href="https://github.com/rowidamorsy9-sudo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        GitHub
                    </a>
                    .
                </p>

                {/* View More / View Less Button */}
                <div className="text-center mt-8">
                    {!showAll && projectData.length > 3 && (
                        <button onClick={() => setShowAll(true)} className="btn">
                            View More
                        </button>
                    )}
                    {showAll && (
                        <button onClick={() => setShowAll(false)} className="btn">
                            View Less
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
