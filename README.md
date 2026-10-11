# Rowida Morsy — Portfolio

Personal portfolio of **Rowida Morsy**, a freelance Machine Learning Engineer specializing in Computer Vision, NLP, and data-driven solutions.

**Live site:** https://rowidamorsy9-sudo.github.io/

---

## Sections

1. **Hero** — intro, "Available for freelance projects" badge, Hire Me / View My Work / Download Résumé buttons
2. **About** — bio, key numbers, languages
3. **Services** — what I offer to clients
4. **Tech Stack** — languages, AI & data tools, security tools, working style
5. **Projects** — 7 projects with images, descriptions, outcomes, and GitHub links
6. **Experience** — DEPI (Microsoft Machine Learning Track) and Cyshield internship
7. **Cybersecurity Training** — Huawei Network Security and Cyshield internship
8. **Education & Certifications** — BSc Computer Science (MSA University), Coursera, Huawei
9. **Contact** — email form, phone, LinkedIn, GitHub

## Built with

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) and [Lenis](https://lenis.darkroom.engineering/) for animation and smooth scrolling
- [Spline](https://spline.design/) for the 3D hero background (falls back to a gradient if it can't load)

## Getting started

You need [Node.js](https://nodejs.org/) (LTS version) installed.

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the local dev server
npm run dev
```

Open the link printed in the terminal, usually `http://localhost:5173`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local dev server with live reload |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks the code for issues |

## Project structure

```
├── public/                       Files served as-is
│   ├── Rowida_Morsy_Resume.pdf   Résumé (Download button)
│   ├── IEEE_Conference_Template.pdf  IEEE paper
│   └── huawei-network-security.png   Huawei certificate
├── src/
│   ├── assets/
│   │   ├── rowida.jpg            Profile photo (About section)
│   │   └── projects/             Project screenshots
│   ├── data/
│   │   └── projects.js           All project content
│   ├── components/               One file per section
│   └── App.jsx                   Section order
└── index.html                    Page title and meta description
```

## Editing the content

| To change... | Edit this file |
| --- | --- |
| Hero text, roles, buttons | `src/components/hero.jsx` |
| About text, stats, languages | `src/components/About.jsx` |
| Services | `src/components/Services.jsx` |
| Skills and tools | `src/components/Skills.jsx` |
| Projects (text, images, links) | `src/data/projects.js` |
| Experience | `src/components/Experience.jsx` |
| Cybersecurity training | `src/components/CyberTraining.jsx` |
| Education and certifications | `src/components/Education.jsx` |
| Contact details | `src/components/ContactForm.jsx` and `src/components/SocialMagnet.jsx` |
| Navigation links | `src/components/Navbar.jsx` |
| Section order | `src/App.jsx` |
| Page title / description | `index.html` |

### Adding a project

1. Put the screenshot in `src/assets/projects/`.
2. Open `src/data/projects.js`, import the image at the top, and add a new entry:

```js
{
  title: 'Project Name',
  category: 'computer vision',
  description: 'What the project does...',
  imageUrl: myImage,
  repoUrl: 'https://github.com/rowidamorsy9-sudo/repo-name',
  outcome: { label: 'result or stack' },
}
```

The desktop and mobile layouts both read from this file, so you only add it once.

### Updating the résumé

Replace `public/Rowida_Morsy_Resume.pdf` with the new file, keeping the same name.

## Deploying

**GitHub Pages** (for `rowidamorsy9-sudo.github.io`):

```bash
npm run build
```

Then upload the contents of the `dist/` folder to the root of the `rowidamorsy9-sudo.github.io` repository and push.

**Netlify / Vercel:** connect the repo, set the build command to `npm run build` and the output folder to `dist`. Or drag and drop the `dist/` folder onto Netlify.

## Contact

- Email: rowidamorsy9@gmail.com
- LinkedIn: https://www.linkedin.com/in/rowida-morsy/
- GitHub: https://github.com/rowidamorsy9-sudo

Available for freelance machine learning and computer vision projects.
