import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";

const training = [
  {
    icon: '🛡️',
    title: 'Huawei Network Security',
    text: 'Certified course covering network security fundamentals, firewall configuration, intrusion detection, and secure network architecture.',
    meta: 'certification • 2025',
  },
  {
    icon: '🔒',
    title: 'Cyshield Internship',
    text: 'Immersive summer internship focused on cybersecurity operations, threat analysis, and defensive strategies. Explored career paths and observed professional security teams.',
    meta: 'jul – aug 2025 • Cairo',
  },
];

export default function CyberTraining() {
  return (
    <section id="cyber" className="w-full bg-white text-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">defensive mindset</p>
          <h2 className="text-4xl md:text-5xl font-bold font-pixel inline-block">
            <Highlighter action="underline" color="#FFD700">
              Cybersecurity Training
            </Highlighter>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {training.map((t) => (
            <div key={t.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <div className="text-3xl mb-2">{t.icon}</div>
              <h3 className="text-lg font-bold mb-1">{t.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-gray-400">{t.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
