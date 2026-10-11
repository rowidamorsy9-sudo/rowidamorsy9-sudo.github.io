import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";

export default function Education() {
  return (
    <section id="education" className="w-full bg-white text-black py-20">
      <div className="container mx-auto px-4">
        {/* Education */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">dataset</p>
          <h2 className="text-4xl md:text-5xl font-bold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Education
            </Highlighter>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">BSc Computer Science</h3>
          <p className="text-sm font-medium text-gray-700">MSA University, Giza, Egypt — expected 2027</p>
          <p className="text-sm text-gray-700 mt-1">GPA: 3.73 / 4.00</p>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            <strong>Relevant coursework:</strong> Machine Learning, Data Structures &amp; Algorithms, Probability &amp; Statistics, Computer Networks, Database Systems, Linear Algebra.
          </p>
        </div>

        {/* Certifications */}
        <div id="certifications" className="text-center mt-20 mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">citations</p>
          <h2 className="text-4xl md:text-5xl font-bold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Certifications
            </Highlighter>
          </h2>
        </div>
        <ul className="max-w-2xl mx-auto space-y-3 text-sm">
          <li className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 shadow-sm">
            <strong>Cybersecurity Basics</strong> — Coursera
          </li>
          <li className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 shadow-sm">
            <a href="/huawei-network-security.png" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:text-blue-800 underline">
              Network Security Course
            </a>{' '}
            — Huawei
          </li>
        </ul>
      </div>
    </section>
  );
}
