import React from 'react';
import { Highlighter } from "@/components/ui/highlighter";

const services = [
  {
    icon: '👁️',
    title: 'Computer Vision Prototypes',
    text: 'Face/object recognition and image classification pipelines, built from your dataset to a working demo.',
  },
  {
    icon: '💬',
    title: 'NLP & Text Automation',
    text: 'Text classification and gesture/sign-to-text style systems that turn unstructured input into something usable.',
  },
  {
    icon: '🗂️',
    title: 'Data Collection & Prep',
    text: 'Scraping, structuring, and cleaning raw data into an ML-ready dataset — no manual spreadsheet wrangling required.',
  },
  {
    icon: '📊',
    title: 'Model Training & Benchmarking',
    text: 'Comparing multiple models against your data and constraints to find the one that actually fits your use case.',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-white text-black py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-pixel">
            <Highlighter action="underline" color="#FFD700">
              What I Offer
            </Highlighter>
          </h2>
        </div>
        {/* USP */}
        <div className="max-w-3xl mx-auto mb-12 rounded-2xl border-2 border-yellow-300 bg-yellow-50 px-6 py-6 shadow-sm">
          <p className="text-xl md:text-2xl font-bold leading-snug">
            Got messy data or a problem that needs a smarter solution?
          </p>
          <p className="mt-2 text-lg md:text-xl text-gray-700">
            I turn it into practical AI that actually works.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-3xl mb-2">{s.icon}</div>
              <h3 className="text-lg font-bold mb-1">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-600">
          Have a dataset and a problem you want solved?{' '}
          <a href="mailto:rowidamorsy9@gmail.com" className="text-blue-600 font-semibold hover:text-blue-800">
            Let's talk about what's possible
          </a>
          .
        </p>
      </div>
    </section>
  );
}
