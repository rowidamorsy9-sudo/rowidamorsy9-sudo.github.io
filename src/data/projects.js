import faceImg from '../assets/projects/face-recognition.jpg';
import signImg from '../assets/projects/sign-language.jpg';
import mernImg from '../assets/projects/mern.jpg';
import csharpImg from '../assets/projects/csharp-games.jpg';
import employeeImg from '../assets/projects/employee-mgmt.jpg';
import compilerImg from '../assets/projects/compiler.jpg';

// Shared by Projects.jsx (desktop) and ProjectsMobile.jsx
export const projectData = [
  {
    title: 'Face Recognition Attendance System',
    category: 'computer vision',
    description:
      'A computer vision project that improves facial recognition accuracy through image processing and deep learning. The pipeline processes 1,005 grayscale facial images from 10 individuals, applies multiple enhancement techniques including median filtering, histogram equalization, contrast stretching, high-boost filtering, and gamma correction, then trains a CNN for facial classification. The model was evaluated using accuracy, confusion matrices, classification reports, and training curves, achieving 97.1% accuracy after enhancement compared to 85% before enhancement. The work was also developed into a research paper published in the IEEE ICCA 2025 proceedings.',
    imageUrl: faceImg,
    repoUrl: 'https://github.com/rowidamorsy9-sudo/face-recognition-image-enhancement',
    outcome: { label: 'published — IEEE', url: '/IEEE_Conference_Template.pdf' },
  },
  {
    title: 'Sign Language to Text',
    category: 'computer vision · ml',
    description:
      'A computer vision and machine learning system for recognizing sign language gestures and converting them into text. The project processes a public sign language dataset, prepares the data for model training, and trains and evaluates five different machine learning models. Their performance is compared using evaluation metrics to identify the most accurate and reliable approach for sign language recognition.',
    imageUrl: signImg,
    repoUrl: 'https://github.com/rowidamorsy9-sudo/asl-alphabet-recognition',
    outcome: { label: '5 models benchmarked' },
  },
  {
    title: 'CS Research Paper Web Scraper',
    category: 'data engineering',
    description:
      'A web scraping project inspired by arXiv that collects computer science research papers, extracts structured information, and organizes the data by category for further analysis.',
    comingSoon: true,
    outcome: { label: '~1,000 papers collected' },
  },
  {
    title: 'MERN Stack Web Application',
    category: 'full-stack',
    description:
      'A full-stack MERN web application featuring user authentication, protected routes, RESTful APIs, and MongoDB data management. The project integrates frontend, backend, database, and basic security practices into a complete end-to-end application.',
    imageUrl: mernImg,
    repoUrl: 'https://github.com/rowidamorsy9-sudo/Pet-Adoption-Care-Platform',
    outcome: { label: 'stack: MongoDB · Express · React · Node' },
  },
  {
    title: 'C# Game Development',
    category: 'systems',
    description:
      'Two interactive games developed in C# using object-oriented programming and core game-development concepts, including game logic, collision detection, event handling, player interaction, and graphical components.',
    imageUrl: csharpImg,
    repoUrl: 'https://github.com/rowidamorsy9-sudo/Graphics-Train-Track-Game',
    outcome: { label: 'language: C#' },
  },
  {
    title: 'Employee Management System',
    category: 'python',
    description:
      'A desktop-based employee management system built with Python and Tkinter. The application manages full-time, part-time, and freelance employees, providing employee CRUD operations, salary calculation, attendance tracking, filtering, sorting, statistics, and JSON-based data storage.',
    imageUrl: employeeImg,
    repoUrl: 'https://github.com/rowidamorsy9-sudo/employee-management-system',
    outcome: { label: 'Python · Tkinter · OOP' },
  },
  {
    title: 'Semantic Analyzer & Memory Simulator',
    category: 'compiler design · python',
    description:
      'A Python Compiler Design project implementing lexical tokenization, semantic analysis, and memory simulation with an interactive Tkinter GUI. Source code is tokenized, checked for semantic errors (undeclared variables, invalid conditions, missing braces, and more), and then run through a memory simulator that tracks variable declarations, assignments, compound operators, and loop execution — surfacing declared variables, errors, warnings, and the final memory state side by side.',
    imageUrl: compilerImg,
    repoUrl: 'https://github.com/rowidamorsy9-sudo/compiler-semantic-analyzer/tree/main',
    outcome: { label: 'Python · Tkinter · compiler phases' },
  },
];
