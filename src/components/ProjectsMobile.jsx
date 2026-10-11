import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import { projectData } from '../data/projects';

export default function ProjectsMobile() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section id="projects-mobile" className="w-full bg-white text-black py-12 px-2">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-pixel underline-wavy-yellow inline-block">
                    <Highlighter action="underline" color="#FFD700">
                        Projects 🚀
                    </Highlighter>
                </h2>
            </div>
            <div className="flex flex-col gap-6 max-w-md mx-auto">
                {displayedProjects.map((project) => (
                    <div key={project.title} className="bg-white rounded-xl shadow p-4 flex flex-col">
                        <div className="w-full h-40 rounded-lg overflow-hidden mb-3 bg-gray-100">
                            {project.imageUrl ? (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-gray-100 text-gray-500 text-sm font-semibold">
                                    <span className="text-3xl mb-1">🚧</span>
                                    Coming Soon<span className="text-[11px] font-normal text-gray-400 mt-1">Project currently being prepared</span>
                                </div>
                            )}
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1">{project.category}</span>
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-xs text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                        <div className="text-xs text-gray-700 mb-3">
                            <span className="font-semibold">outcome:</span>{' '}
                            {project.outcome?.url ? (
                                <a href={project.outcome.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                    {project.outcome.label}
                                </a>
                            ) : (
                                project.outcome?.label
                            )}
                        </div>
                        <div className="flex gap-3 mt-auto">
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg"
                                >
                                    View on GitHub ↗
                                </a>
                            )}
                            {project.comingSoon && (
                                <span className="text-gray-400 font-semibold text-xs py-2">Coming Soon</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-8">
                More on{' '}
                <a
                    href="https://github.com/rowidamorsy9-sudo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold"
                >
                    GitHub
                </a>
            </p>
            <div className="text-center mt-6">
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
        </section>
    );
}
