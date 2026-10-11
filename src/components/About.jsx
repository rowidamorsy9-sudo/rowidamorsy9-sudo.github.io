import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";
import photo from '../assets/rowida.jpg';

const stats = [
  { num: '97.1%', label: 'face recognition accuracy (up from 85%)' },
  { num: '1,005', label: 'images processed in my IEEE paper' },
  { num: '5', label: 'ML models benchmarked on sign language' },
  { num: '1', label: 'IEEE ICCA 2025 publication' },
  { num: '7', label: 'projects shipped' },
  { num: '3.73', label: 'GPA out of 4.00, BSc Computer Science' },
];

const paragraphs = [
  "I'm Rowida, a freelance Machine Learning Engineer specializing in Computer Vision, NLP, and data-driven solutions. I work end-to-end — from cleaning and preparing data to exploring it, training and comparing models, evaluating results, and building solutions that actually run.",
  "My toolkit includes Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Scikit-learn, TensorFlow, and Keras, with experience building machine learning and deep learning workflows from raw data to working prototypes.",
  "My Computer Vision research was published in IEEE, where I developed a facial recognition system using 1,005 grayscale images and image enhancement techniques such as median filtering, contrast stretching, histogram equalization, high-boost filtering, and gamma correction. The optimized CNN achieved up to 97.1% accuracy on the test set, compared with 85% before optimization.",
  "I also bring a security-focused mindset from my experience with Cyshield, where I gained hands-on exposure to cybersecurity and learned to think about not only how a system performs, but also how it can fail and where it can be vulnerable.",
  "I'm currently developing my skills through Microsoft's Machine Learning track at DEPI, while continuing to build practical projects in machine learning, data analysis, computer vision, and NLP.",
  "I take on select projects where real ML solves a real problem — automating a manual process, extracting insights from messy data, analyzing data through interactive dashboards, or prototyping a computer vision or NLP idea.",
  "If you have a dataset and a problem, I can help you explore what's possible, build the right solution, and turn the result into something usable.",
];

export default function About() {
  return (
    <section id="about" className="w-full bg-white text-black px-6 py-20 sm:px-16 md:px-24 flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <div className="mb-10 flex justify-center">
          <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
            <Highlighter action="underline" color="#FFD700">
              About Me 😊
            </Highlighter>
          </h2>
        </div>

        <img
          src={photo}
          alt="Rowida Morsy"
          className="mx-auto mb-8 h-40 w-40 rounded-full object-cover object-top shadow-lg border-4 border-yellow-200"
        />

        <div className="space-y-4 text-left font-sans text-base leading-relaxed text-gray-800 sm:text-lg">
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 shadow-sm">
              <div className="text-3xl font-bold font-pixel">{s.num}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-600">
          <strong>Languages:</strong> Arabic — native · English — B1
        </p>

        <a
          href="mailto:rowidamorsy9@gmail.com?subject=Freelance%20project%20inquiry"
          className="btn mt-6 !w-auto px-6"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
