// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './portfolio.css'; // Import your CSS file

const App = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Extracurricular />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
