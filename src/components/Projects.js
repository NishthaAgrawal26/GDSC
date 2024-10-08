import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <h3>Portfolio</h3>
                    <p>Made a portfolio using HTML, CSS, React</p>
                </div>
                <div className="project-card">
                    <h3>Cryptic Hunt Home Page</h3>
                    <p>Made a home page for the cryptic hunt website of MIST'24 hosted by IEEE DTU using HTML, CSS (Tailwind), Next.js</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
