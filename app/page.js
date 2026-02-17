"use client";

import React from 'react';

export default function Portfolio() {
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', caption: 'mountains.jpg' },
    { id: 2, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', caption: 'forest.jpg' },
    { id: 3, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', caption: 'trail.jpg' },
  ];

  const videos = [
    { id: 1, thumbnail: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800', title: 'project_demo.mp4' },
    { id: 2, thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800', title: 'timelapse_city.mp4' },
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f0f9ff, #ffffff)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .header {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #000000;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav a {
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav a:hover {
          color: #00ff9f;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .hero {
          text-align: center;
          padding: 4rem 0 6rem;
        }

        .hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 4rem;
          font-weight: 700;
          color: #000000;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00ff9f, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero p {
          font-size: 1.25rem;
          color: #333333;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: #000000;
          margin-bottom: 3rem;
        }

        .media-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 8rem;
        }

        .media-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          aspect-ratio: 4/3;
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          cursor: pointer;
        }

        .media-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 255, 159, 0.2);
        }

        .media-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .media-card:hover img {
          transform: scale(1.05);
        }

        .media-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.95);
          color: #000000;
          font-weight: 500;
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .media-card:hover .media-caption {
          transform: translateY(0);
        }

        .video-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .play-icon {
          width: 0;
          height: 0;
          border-left: 12px solid #00ff9f;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          margin-left: 3px;
        }

        .about-section {
          max-width: 800px;
          margin: 0 auto 8rem;
          text-align: center;
        }

        .about-section h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          color: #000000;
          margin-bottom: 2rem;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #333333;
          margin-bottom: 1.5rem;
        }

        .links-section {
          text-align: center;
          padding: 4rem 0;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 50px;
          text-decoration: none;
          color: #000000;
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
        }

        .social-link:hover {
          transform: translateY(-4px);
          border-color: #00ff9f;
          box-shadow: 0 8px 24px rgba(0, 255, 159, 0.2);
        }

        .social-icon {
          font-size: 1.5rem;
        }

        .footer {
          text-align: center;
          padding: 3rem 2rem;
          color: #666666;
          border-top: 1px solid #e5e7eb;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .header {
            flex-direction: column;
            gap: 1.5rem;
          }

          .nav {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .media-grid {
            grid-template-columns: 1fr;
          }

          .social-links {
            flex-direction: column;
            align-items: center;
          }

          .social-link {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="logo">portfolio</div>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <div className="container">
        <section className="hero">
          <h1>
            Creative & <span className="gradient-text">Technical</span> Work
          </h1>
          <p>
            Exploring the intersection of design, code, and storytelling through 
            photography, video, music, and interactive experiences.
          </p>
        </section>

        {/* Media Gallery */}
        <section id="work">
          <h2 className="section-title">Recent Work</h2>
          <div className="media-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="media-card">
                <img src={photo.url} alt={photo.caption} />
                <div className="media-caption">{photo.caption}</div>
              </div>
            ))}
            
            {videos.map((video) => (
              <div key={video.id} className="media-card">
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-badge">
                  <div className="play-icon"></div>
                </div>
                <div className="media-caption">{video.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p className="about-text">
            Creative technologist and multimedia artist exploring the intersection of code, 
            design, and storytelling. I build things that live at the edge of art and 
            engineering — from interactive installations to data visualizations, experimental 
            music projects to computational photography.
          </p>
          <p className="about-text">
            Currently focused on generative systems, real-time audio processing, and building 
            tools that empower creative expression. Always learning, always making.
          </p>
        </section>

        {/* Links */}
        <section id="contact" className="links-section">
          <h2 className="section-title">Let's Connect</h2>
          <div className="social-links">
            <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">⌘</span>
              <span>GitHub</span>
            </a>
            <a href="https://twitter.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">𝕏</span>
              <span>Twitter</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="/blog" className="social-link">
              <span className="social-icon">📝</span>
              <span>Blog</span>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}