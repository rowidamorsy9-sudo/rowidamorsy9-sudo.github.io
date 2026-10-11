import React from 'react';
import { VelocityText } from './ScrollVelocity';
import { Git, Javascript, Node, ReactLogo, Css, Html, MongoDB } from './SkillLogos';
import { Highlighter } from "@/components/ui/highlighter";

const skillsRow1 = [
  <Javascript key="js" />,
  <Html key="html" />,
  <Css key="css" />,
  <ReactLogo key="react" />,
  <Node key="node" />,
];

const skillsRow2 = [
  <MongoDB key="mongodb" />,
  <Git key="git" />,
  <Javascript key="js2" />,
  <Node key="node2" />,
  <ReactLogo key="react2" />,
];

const skillGroups = [
  { title: 'Languages', items: ['Python', 'C++', 'C#', 'JavaScript', 'SQL', 'HTML/CSS'] },
  { title: 'AI & Data', items: ['Machine Learning', 'NLP', 'Computer Vision', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'] },
  { title: 'Tools & Security', items: ['Git', 'Visual Studio', 'Cisco Packet Tracer', 'Network Security', 'Firewall', 'IDS/IPS'] },
  { title: 'Working Style', items: ['Critical thinking', 'Communication', 'Problem-solving', 'Works well under pressure', 'Organisation'] },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-white text-black py-24">
      <div className="container mx-auto text-center">
        <div className="inline-block mb-12">
          <h2 className="text-5xl font-bold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Tech Stack
            </Highlighter>
          </h2>
        </div>
      </div>
      <div className="relative max-w-screen-lg mx-auto flex flex-col gap-4">
        {/* Left Blur */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
             style={{
               background: 'linear-gradient(to right, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0))',
               filter: 'blur(6px)'
             }}
        />
        {/* Right Blur */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
             style={{
               background: 'linear-gradient(to left, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0))',
               filter: 'blur(6px)'
             }}
        />
        <VelocityText baseVelocity={-5} numCopies={4}>
          {skillsRow1.map((logo, index) => (
            <div key={index} className="w-20 h-20 text-gray-600 mx-4">
              {logo}
            </div>
          ))}
        </VelocityText>
        <VelocityText baseVelocity={5} numCopies={4}>
          {skillsRow2.map((logo, index) => (
            <div key={index} className="w-20 h-20 text-gray-600 mx-4">
              {logo}
            </div>
          ))}
        </VelocityText>
      </div>

      <div className="container mx-auto mt-16 px-4 grid max-w-4xl grid-cols-1 gap-8 text-left sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}