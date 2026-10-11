import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";

const experience = [
  {
    period: '2026 — present',
    role: 'Machine Learning Trainee',
    org: 'DEPI · Microsoft Machine Learning Track',
    text: "Developing core ML skills through Microsoft's track — data analysis, model development, and applied exercises using Python and related tools.",
  },
  {
    period: 'jul – aug 2025',
    role: 'Cybersecurity Intern',
    org: 'Cyshield · Cairo, Egypt',
    text: 'Gained hands-on exposure to cybersecurity fundamentals, explored career paths across the field, and observed how security teams operate in professional environments.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-white text-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">training log</p>
          <h2 className="text-4xl md:text-5xl font-bold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Experience
            </Highlighter>
          </h2>
        </div>
        <div className="relative max-w-2xl mx-auto border-l-2 border-yellow-300 pl-8 space-y-10">
          {experience.map((item) => (
            <div key={item.role} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-yellow-300 bg-white" />
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{item.period}</p>
              <h3 className="text-xl font-bold mt-1">{item.role}</h3>
              <p className="text-sm font-medium text-gray-700">{item.org}</p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
