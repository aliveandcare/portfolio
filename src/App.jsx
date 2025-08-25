import React, { useState, useEffect } from 'react';
import {
  Menu, X, FileCode, FileJson, FileText, Mailbox, Folder, ChevronRight, XCircle, Code, Globe,
  Github, Linkedin
} from 'lucide-react';
const portfolioData = {
  name: "Andrew Thomas",
  title: "Full-Stack Developer & UI/UX Enthusiast",
  bio: "Hello! I'm Andrew, a passionate full-stack developer with a love for creating intuitive, dynamic, and beautiful user experiences. I enjoy tackling complex problems and turning ideas into reality. When I'm not coding, you can find me exploring new hiking trails or contributing to open-source projects.",
  contact: {
    email: "aliveandcare6@gmail.com",
    socials: {
      github: "https://github.com/aliveandcare",
      linkedin: "https://www.linkedin.com/in/andrew-thomas-596947370/",
    }
  },
  skills: [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js',
    'Python', 'Django', 'HTML5 & CSS3', 'Tailwind CSS', 'SQL (PostgreSQL)',
    'NoSQL (MongoDB)', 'Git & GitHub', 'Firebase', 'Firestore', 'Vercel', 'Sanity'
  ],
  projects: [
    {
      title: 'My Step Forward',
      description: 'A comprehensive platform for personal growth and goal tracking.',
      tags: ['Next.js', 'Node.js', 'Firebase'],
      url: 'https://mystepforward.com'
    },
    {
      title: 'Country Boy Website',
      description: 'A promotional and e-commerce website for a country-themed brand.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Sanity', 'Vercel'],
      url: 'https://countryboy.website'
    },
    {
      title: 'This Portfolio',
      description: 'A dual-mode portfolio featuring a visual UI and an interactive IDE, built with React and Tailwind CSS.',
      tags: ['React', 'Tailwind CSS'],
      url: '#'
    },
  ]
};
const SystemCrashEffect = () => {
  const [showBsod, setShowBsod] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  useEffect(() => {
    const bsodTimer = setTimeout(() => setShowBsod(true), 300);
    const errorTimer = setTimeout(() => setShowErrors(true), 600);
    const clearBsodTimer = setTimeout(() => setShowBsod(false), 900);
    return () => {
      clearTimeout(bsodTimer);
      clearTimeout(errorTimer);
      clearTimeout(clearBsodTimer);
    };
  }, []);
  return (
    <>
      <style>{`
        @keyframes glitch-anim-intense {
          0% { transform: translate(0); }
          10% { transform: translate(-8px, 8px) skewX(15deg); }
          20% { transform: translate(8px, -8px) skewY(-15deg); }
          30% { transform: translate(0); }
          40% { transform: translate(12px, -12px) skewX(-25deg); }
          50% { transform: translate(-12px, 12px) skewY(25deg); }
          60% { transform: translate(0); }
          100% { transform: translate(0); }
        }
        .glitch-overlay-intense {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background-color: #111827; z-index: 9990;
          animation: glitch-anim-intense 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .bsod {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background-color: #0000AA; color: white; font-family: 'Lucida Console', monospace;
          z-index: 9995; display: flex; flex-direction: column; justify-content: center;
          align-items: center; text-align: center; padding: 2rem;
        }
        .error-popup {
          position: fixed; background: #c0c0c0; border: 2px solid #fff;
          border-right-color: #000; border-bottom-color: #000; box-shadow: 2px 2px 0 #000;
          padding: 0.5rem; z-index: 9999; font-family: 'Tahoma', sans-serif;
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          10%, 90% { opacity: 1; }
        }
        .error-popup { animation: fadeInOut 0.5s ease-in-out; }
      `}</style>
      <div className="glitch-overlay-intense"></div>
      {showBsod && (
        <div className="bsod">
          <p className="text-4xl mb-4">:(</p>
          <p>A fatal exception 0E has occurred at 0028:C0011E36.</p>
          <p>The current application will be terminated.</p>
        </div>
      )}
      {showErrors && (
        <>
          <div className="error-popup rounded-md" style={{ top: '20%', left: '30%' }}>
            <div className="bg-blue-800 text-white px-2 py-1 mb-2 rounded-t-sm flex items-center justify-between">
              Critical Error <X className="w-4 h-4 cursor-pointer" onClick={() => setShowErrors(false)} />
            </div>
            <p className="text-gray-800">UNEXPECTED_KERNEL_MODE_TRAP</p>
          </div>
          <div className="error-popup rounded-md" style={{ top: '50%', left: '50%' }}>
            <div className="bg-blue-800 text-white px-2 py-1 mb-2 rounded-t-sm flex items-center justify-between">
              System Failure <X className="w-4 h-4 cursor-pointer" onClick={() => setShowErrors(false)} />
            </div>
            <p className="text-gray-800">MEMORY_MANAGEMENT_FAILURE</p>
          </div>
        </>
      )}
    </>
  );
};
export default function App() {
  const [mode, setMode] = useState('visual');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const toggleMode = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setMode(prevMode => prevMode === 'visual' ? 'ide' : 'visual');
      setIsTransitioning(false);
    }, 1500);
  };
  if (isTransitioning) {
    return <SystemCrashEffect />;
  }
  return mode === 'visual'
    ? <VisualPortfolio onToggleMode={toggleMode} />
    : <IdePortfolio onToggleMode={toggleMode} />;
}
const PrimaryButton = ({ onClick, children, className = '', href, as: Component = 'button' }) => (
  <Component
    onClick={onClick}
    href={href}
    className={`font-mono bg-cyan-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 animate-pulse focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 ${className}`}
  >
    {children}
  </Component>
);
const VisualPortfolio = ({ onToggleMode }) => (
  <div className="bg-gray-900 text-gray-200 font-sans antialiased min-h-screen">
    <Header />
    <main className="pt-20">
      <HeroSection />
      <IdeToggleButton onToggleMode={onToggleMode} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors rounded-md p-1">
          {portfolioData.name}
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-md p-1">
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 text-gray-300 hover:text-cyan-400 focus:outline-none rounded-md p-1"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center animate-fade-in-down rounded-b-lg">
          <nav className="flex flex-col space-y-8 text-center">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl text-gray-200 hover:text-cyan-400 transition-colors duration-300 rounded-md p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-center py-20 rounded-b-xl shadow-inner">
    <div className="container mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
        {portfolioData.name}
      </h1>
      <p className="text-2xl md:text-3xl text-cyan-400 mb-8 animate-fade-in-up delay-100">
        {portfolioData.title}
      </p>
      <img
        src="/creator.png"
        alt="Digital Creator Logo"
        className="mx-auto mb-8 w-200 h-auto rounded-lg shadow-lg animate-fade-in-up"
      />
    </div>
  </section>
);
const IdeToggleButton = ({ onToggleMode }) => (
  <section className="py-10 bg-gray-900 text-center rounded-lg my-8">
    <div className="container mx-auto px-6 border-2 border-dashed border-gray-700 rounded-lg p-8 transform hover:scale-100 transition-transform duration-300">
      <p className="font-mono text-gray-400 mb-4 text-lg">Curiosity is a feature, not a bug.</p>
      <PrimaryButton onClick={onToggleMode}>
        [ Initiate IDE Mode ]
      </PrimaryButton>
    </div>
  </section>
);
const AboutSection = () => (
  <section id="about" className="py-20 bg-gray-800 rounded-lg my-8 shadow-lg">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-white border-b-2 border-cyan-400 pb-2">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img
            src="/me.jpg"
            alt={portfolioData.name}
            className="rounded-full shadow-2xl mx-auto border-4 border-cyan-400 object-cover w-64 h-64"
            onError={(e) => { e.target.onerror = null;}}
          />
        </div>
        <div className="md:w-2/3 text-lg text-gray-300 leading-relaxed bg-gray-700 p-6 rounded-lg shadow-md">
          <p>{portfolioData.bio}</p>
        </div>
      </div>
    </div>
  </section>
);
const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-gray-900 rounded-lg my-8 shadow-lg">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-white border-b-2 border-cyan-400 pb-2">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <a
            key={index}
            href={project.url !== '#' ? project.url : undefined}
            target={project.url !== '#' ? "_blank" : undefined}
            rel={project.url !== '#' ? "noopener noreferrer" : undefined}
            className={`block group ${project.url === '#' ? 'cursor-default' : 'hover:scale-105'} transition-transform duration-300`}
          >
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col h-full border border-gray-700 group-hover:border-cyan-500 transition-colors duration-300">
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
              <div className="p-6 bg-gray-800 mt-auto border-t border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-700 text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full group-hover:bg-cyan-600 group-hover:text-white transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
const SkillsSection = () => (
  <section id="skills" className="py-20 bg-gray-800 rounded-lg my-8 shadow-lg">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-white border-b-2 border-cyan-400 pb-2">
        Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {portfolioData.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 text-gray-200 py-2 px-5 rounded-lg shadow-md hover:bg-cyan-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);
const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-900 rounded-lg my-8 shadow-lg">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        I'm currently open to new opportunities. Feel free to reach out!
      </p>
      <PrimaryButton href={`mailto:${portfolioData.contact.email}`} as="a">
        Say Hello
      </PrimaryButton>
    </div>
  </section>
);
const Footer = () => (
  <footer className="bg-gray-800 py-8 rounded-t-lg shadow-inner">
    <div className="container mx-auto px-6 text-center text-gray-400">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href={portfolioData.contact.socials.github}
          className="hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700"
          target="_blank" rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <Github className="w-7 h-7" />
        </a>
        <a
          href={portfolioData.contact.socials.linkedin}
          className="hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700"
          target="_blank" rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-7 h-7" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
    </div>
  </footer>
);
const IdePortfolio = ({ onToggleMode }) => {
  const [openTabs, setOpenTabs] = useState([{ id: 'about.md', name: 'about.md', type: 'file' }]);
  const [activeTabId, setActiveTabId] = useState('about.md');
  const openTab = (tab) => {
    if (!openTabs.find(t => t.id === tab.id)) {
      setOpenTabs([...openTabs, tab]);
    }
    setActiveTabId(tab.id);
  };
  const closeTab = (tabIdToClose) => {
    let newActiveTabId = activeTabId;
    if (tabIdToClose === activeTabId) {
      const tabIndex = openTabs.findIndex(t => t.id === tabIdToClose);
      if (openTabs.length > 1) {
        newActiveTabId = tabIndex > 0 ? openTabs[tabIndex - 1].id : openTabs[1].id;
      } else {
        newActiveTabId = null;
      }
    }
    setOpenTabs(openTabs.filter(t => t.id !== tabIdToClose));
    setActiveTabId(newActiveTabId);
  };
  const activeTab = openTabs.find(t => t.id === activeTabId);
  return (
    <div className="bg-[#1e1e1e] text-gray-300 min-h-screen font-mono flex flex-col text-sm rounded-lg overflow-hidden">
      <div className="bg-[#3c3c3c] flex justify-between items-center px-4 py-1 text-xs text-gray-200 shadow-md">
        <div>File Edit Selection View Go Run Terminal Help</div>
        <div className="text-center">{portfolioData.name} - Portfolio IDE</div>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleMode}
            className="bg-red-500 hover:bg-red-600 rounded-full w-4 h-4 flex items-center justify-center transition-colors duration-200"
            title="Exit IDE Mode"
            aria-label="Exit IDE Mode"
          >
            <XCircle className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="bg-[#333333] p-2 flex flex-col items-center space-y-4 shadow-inner">
          <FileCode className="w-7 h-7 text-white cursor-pointer hover:text-cyan-400 transition-colors duration-200" title="Explorer" />
          <Github className="w-7 h-7 text-gray-500 cursor-pointer hover:text-cyan-400 transition-colors duration-200" title="Source Control" />
          <Code className="w-7 h-7 text-gray-500 cursor-pointer hover:text-cyan-400 transition-colors duration-200" title="Extensions" />
        </div>
        <div className="bg-[#252526] w-64 p-2 shadow-md flex-shrink-0">
          <p className="text-xs uppercase text-gray-400 mb-2">Explorer</p>
          <div className="flex items-center mb-2">
            <ChevronRight className="w-4 h-4 mr-1 text-cyan-400" />
            <Folder className="w-4 h-4 mr-1 text-cyan-400" />
            <span className="font-bold text-white">PORTFOLIO</span>
          </div>
          <div className="ml-4">
            <FileNavItem name="about.md" icon={<FileText />} onOpen={() => openTab({ id: 'about.md', name: 'about.md', type: 'file' })} />
            <FileNavItem name="projects.js" icon={<FileCode />} onOpen={() => openTab({ id: 'projects.js', name: 'projects.js', type: 'file' })} />
            <FileNavItem name="skills.json" icon={<FileJson />} onOpen={() => openTab({ id: 'skills.json', name: 'skills.json', type: 'file' })} />
            <FileNavItem name="contact.html" icon={<Mailbox />} onOpen={() => openTab({ id: 'contact.html', name: 'contact.html', type: 'file' })} />
          </div>
        </div>
        <div className="flex-grow bg-[#1e1e1e] flex flex-col">
          <div className="bg-[#252526] flex-shrink-0 shadow-sm">
            <div className="flex flex-wrap">
              {openTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-4 py-2 text-xs flex items-center gap-2 border-t-2 ${activeTabId === tab.id
                      ? 'bg-[#1e1e1e] text-white border-cyan-400'
                      : 'bg-[#2d2d2d] text-gray-400 border-transparent hover:bg-[#3e3e3e]'
                    } transition-colors duration-200 rounded-t-sm`}
                >
                  {tab.type === 'file' ? <FileCode className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                  <span>{tab.name}</span>
                  <X
                    onClick={(e) => { e.stopPropagation(); closeTab(tab.id); }}
                    className="w-4 h-4 hover:bg-gray-600 rounded-sm cursor-pointer ml-2"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-y-auto flex-grow p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {activeTab ? <EditorContent activeTab={activeTab} onOpenTab={openTab} /> : <div className="p-4 text-gray-500">Select a file to open.</div>}
          </div>
        </div>
      </div>
      <div className="bg-[#007acc] text-white px-4 py-1 text-xs flex justify-between rounded-b-lg shadow-inner">
        <div>main*</div>
        <div>Ln 1, Col 1</div>
      </div>
    </div>
  );
};
const FileNavItem = ({ name, icon, onOpen }) => (
  <button
    onClick={onOpen}
    className={`w-full text-left flex items-center p-1 rounded hover:bg-[#37373d] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors duration-200`}
  >
    <div className="mr-2 text-cyan-400">{icon}</div>
    <span>{name}</span>
  </button>
);
const EditorContent = ({ activeTab, onOpenTab }) => {
  if (activeTab.type === 'live-preview') {
    return <iframe src={activeTab.url} className="w-full h-full border-none rounded-md shadow-inner" title={activeTab.name}></iframe>;
  }
  switch (activeTab.id) {
    case 'about.md': return <div className="p-4 bg-[#1e1e1e] text-gray-300 rounded-md shadow-inner"><AboutContent /></div>;
    case 'projects.js': return <div className="p-4 bg-[#1e1e1e] text-gray-300 rounded-md shadow-inner"><ProjectsContent onOpenTab={onOpenTab} /></div>;
    case 'skills.json': return <div className="p-4 bg-[#1e1e1e] text-gray-300 rounded-md shadow-inner"><SkillsContent /></div>;
    case 'contact.html': return <div className="p-4 bg-[#1e1e1e] text-gray-300 rounded-md shadow-inner"><ContactContent /></div>;
    default: return null;
  }
};
const Syntax = ({ children, lang }) => <span className={lang}>{children}</span>;
const AboutContent = () => (
  <div>
    <p><Syntax lang="text-purple-400 font-bold"># About Me</Syntax></p>
    <br />
    <p className="text-gray-300">{portfolioData.bio}</p>
  </div>
);
const ProjectsContent = ({ onOpenTab }) => (
  <div>
    <p><Syntax lang="text-purple-400">const</Syntax> <Syntax lang="text-yellow-300">myProjects</Syntax> <Syntax lang="text-gray-400">=</Syntax> <Syntax lang="text-blue-400">[</Syntax></p>
    {portfolioData.projects.map((p, i) => (
      <div key={i} className="ml-4">
        <p><Syntax lang="text-gray-400">{'{'}</Syntax></p>
        <button
          onClick={() => p.url !== '#' && onOpenTab({ id: p.url, name: p.title, type: 'live-preview', url: p.url })}
          className={`ml-4 text-left ${p.url !== '#' ? 'cursor-pointer hover:underline text-cyan-400' : 'cursor-default text-cyan-500'} transition-colors duration-200`}
          disabled={p.url === '#'}
        >
          <Syntax lang="text-cyan-400">title:</Syntax> <Syntax lang="text-green-400">"{p.title}"</Syntax>,
        </button>
        <p className="ml-4"><Syntax lang="text-cyan-400">description:</Syntax> <Syntax lang="text-green-400">"{p.description}"</Syntax>,</p>
        <p className="ml-4">
          <Syntax lang="text-cyan-400">stack:</Syntax> <Syntax lang="text-blue-400">[</Syntax>
          {p.tags.map((t, index) => (
            <React.Fragment key={index}>
              <Syntax lang="text-green-400">"{t}"</Syntax>{index < p.tags.length - 1 && ', '}
            </React.Fragment>
          ))}
          <Syntax lang="text-blue-400">]</Syntax>,
        </p>
        <p className="ml-4"><Syntax lang="text-cyan-400">livePreview:</Syntax> <Syntax lang="text-green-400">"{p.url}"</Syntax></p>
        <p><Syntax lang="text-gray-400">{'}'}</Syntax>{i < portfolioData.projects.length - 1 && ','}</p>
      </div>
    ))}
    <p><Syntax lang="text-blue-400">]</Syntax>;</p>
    <p className="mt-4 text-gray-500">Click a project title to open a live preview.</p>
  </div>
);
const SkillsContent = () => (
  <div>
    <p><Syntax lang="text-gray-400">{'{'}</Syntax></p>
    <p className="ml-4"><Syntax lang="text-cyan-400">"technicalSkills"</Syntax><Syntax lang="text-gray-400">:</Syntax> <Syntax lang="text-blue-400">[</Syntax></p>
    <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
      {portfolioData.skills.map((s, i) => (
        <p key={i}><Syntax lang="text-green-400">"{s}"</Syntax>{i < portfolioData.skills.length - 1 && ','}</p>
      ))}
    </div>
    <p className="ml-4"><Syntax lang="text-blue-400">]</Syntax></p>
    <p><Syntax lang="text-gray-400">{'}'}</Syntax></p>
  </div>
);
const ContactContent = () => (
  <div>
    <p><Syntax lang="text-red-400">&lt;h1&gt;</Syntax>Contact Me<Syntax lang="text-red-400">&lt;/h1&gt;</Syntax></p>
    <p><Syntax lang="text-red-400">&lt;p&gt;</Syntax>I'm open to new opportunities.<Syntax lang="text-red-400">&lt;/p&gt;</Syntax></p>
    <br />
    <p>
      <Syntax lang="text-red-400">&lt;a</Syntax> <Syntax lang="text-cyan-400">href</Syntax>=<Syntax lang="text-green-400">"mailto:{portfolioData.contact.email}"</Syntax>
      <Syntax lang="text-red-400"> target="_blank" rel="noopener noreferrer"&gt;</Syntax>Email Me<Syntax lang="text-red-400">&lt;/a&gt;</Syntax>
    </p>
    <p>
      <Syntax lang="text-red-400">&lt;a</Syntax> <Syntax lang="text-cyan-400">href</Syntax>=<Syntax lang="text-green-400">"{portfolioData.contact.socials.github}"</Syntax>
      <Syntax lang="text-red-400"> target="_blank" rel="noopener noreferrer"&gt;</Syntax>GitHub<Syntax lang="text-red-400">&lt;/a&gt;</Syntax>
    </p>
    {portfolioData.contact.socials.linkedin && portfolioData.contact.socials.linkedin !== '#' && (
        <p>
          <Syntax lang="text-red-400">&lt;a</Syntax> <Syntax lang="text-cyan-400">href</Syntax>=<Syntax lang="text-green-400">"{portfolioData.contact.socials.linkedin}"</Syntax>
          <Syntax lang="text-red-400"> target="_blank" rel="noopener noreferrer"&gt;</Syntax>LinkedIn<Syntax lang="text-red-400">&lt;/a&gt;</Syntax>
        </p>
    )}
  </div>
);
