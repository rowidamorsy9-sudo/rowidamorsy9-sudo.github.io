import React, { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));
import { ArrowRight } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

/**
 * A modern, minimal hero section component.
 */
// If the 3D scene fails to load (offline, blocked, removed), show a gradient instead of a blank page
class SafeBackground extends React.Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() {}
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

const gradientFallback = (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-800" />
);

export default function Hero() {
  const skills = ['Machine Learning Engineer', 'Computer Vision & NLP', 'Cybersecurity Trained', 'Open to Freelance Projects'];
  const greetings = ["Hello", "Hola", "Ciao", "مرحبا"];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 1. Spline Background */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <SafeBackground fallback={gradientFallback}>
          <Suspense fallback={gradientFallback}>
            <Spline
              scene="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
              aria-label="Interactive 3D animation"
              onError={() => {}}
            />
          </Suspense>
        </SafeBackground>
      </div>

      {/* 2. Overlay Content */}
      {/* Content is aligned to the center */}
      <div className="relative z-20 flex items-center justify-center w-full h-full p-8 text-center bg-black/20 pointer-events-none sm:p-16 md:p-24">
        <div className="max-w-xl pointer-events-auto">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs text-white backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for freelance projects
          </div>
          <h1 className="font-pixel flex items-center justify-center gap-x-2 text-5xl font-bold text-white md:text-7xl lg:text-8xl [text-shadow:_0_3px_5px_rgb(0_0_0_/_40%)]">
            <WordRotate words={greetings} />
            {", I'm"}
          </h1>
          <p className="font-pixel mt-2 text-4xl font-bold text-white md:text-6xl [text-shadow:_0_3px_5px_rgb(0_0_0_/_40%)]">
            Rowida Morsy
          </p>
          
          {/* Rotating Text for Skills */}
          <div className="flex justify-center mt-4">
            <RotatingText
              texts={skills}
              mainClassName="text-lg text-white/90 md:text-xl lg:text-2xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
          </div>
        
          {/* Call-to-action buttons */}
          <p className="mt-6 text-lg font-semibold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
            I turn your data into machines that see, read, and learn.
          </p>
          <p className="mt-2 text-sm text-white/80">
            A freelance machine learning engineer specializing in computer vision and NLP, with a published IEEE paper and a track record of shipping working systems, not just notebooks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                setTimeout(() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg pointer-events-auto hover:bg-gray-200 hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="mailto:rowidamorsy9@gmail.com?subject=Freelance%20project%20inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-black transition-all duration-300 bg-yellow-300 rounded-lg shadow-lg pointer-events-auto hover:bg-yellow-400 hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href="/Rowida_Morsy_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white rounded-lg shadow-lg pointer-events-auto hover:bg-white hover:text-white hover:scale-105"
            >
              Download Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}