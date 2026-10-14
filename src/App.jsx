import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProgramsPage from './pages/ProgramsPage.jsx';
import NewsPage from './pages/NewsPage.jsx';

function getCurrentPage(path) {
  if (path.includes('about')) return 'about';
  if (path.includes('programs')) return 'programs';
  if (path.includes('news-events')) return 'news';
  return 'home';
}
export default function App() {
  const page = getCurrentPage(window.location.pathname.toLowerCase());
  const pageTitles = {
    home: 'Excellent Greater Height Standard Academy',
    about: 'About | Excellent Greater Height Standard Academy',
    programs: 'Classes & Programmes | Excellent Greater Height Standard Academy',
    news: 'News & Events | Excellent Greater Height Standard Academy',
  };

  document.title = pageTitles[page];

  const pages = {
    home: <HomePage />,
    about: <AboutPage />,
    programs: <ProgramsPage />,
    news: <NewsPage />,
  };

  return (
    <>
      <Navbar />
      <main>{pages[page]}</main>
      <Footer />
    </>
  );
}
