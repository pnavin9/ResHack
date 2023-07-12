/**
 * App Component
 * The entry point of the React application.
 * Defines the routes for different pages of the application.
 */
import React from 'react';
import Home from './Compnenets/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Compnenets/Header/Header';
import Footer from './Compnenets/Footer/Footer';
import Templates from './Compnenets/ExploreTemplates';
import Resume from './Compnenets/Resume/Resume';
import TemplateGallery from './Compnenets/TemplateGallery';
import NotFound from './Compnenets/NotFound';
import Thanks from './Compnenets/Thanks';
import HowItWorks from './Compnenets/HowItWorks';
import About from './Compnenets/About';

function App() {
  /**
   * Renders the App component
   */
  return (
    <Router>
      {/* Header component */}
      <Header />

      {/* Routes */}
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Templates page */}
        <Route path="/templates" element={<Templates />} />

        {/* Resume page */}
        <Route path="/resume/:id" element={<Resume />} />

        {/* Template Gallery page */}
        <Route path="/templategallery" element={<TemplateGallery />} />

        {/* Thanks page */}
        <Route path="/thanks" element={<Thanks />} />

        {/* How It Works page */}
        <Route path="/howitworks" element={<HowItWorks />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* NotFound page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer component */}
      <Footer />
    </Router>
  );
}

export default App;
