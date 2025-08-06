"use client"

import { Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export function SocialCard() {
  const [showEmail, setShowEmail] = useState(false)

  const handleGithubClick = () => {
    window.open('https://github.com/MoatezTilouche', '_blank')
  }

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/moatez-tilouch-a58a96284/', '_blank')
  }

  const handleEmailClick = () => {
    window.open('mailto:moateztilouch@gmail.com', '_blank')
  }

  return (
    <div className="social-card">
      <ul>
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <button onClick={handleGithubClick} className="social-link">
            <Github className="social-svg" />
          </button>
          <div className="social-text">GitHub</div>
        </li>
        
        <li className="iso-pro">
          <span></span>
          <span></span>
          <span></span>
          <button onClick={handleLinkedinClick} className="social-link">
            <Linkedin className="social-svg" />
          </button>
          <div className="social-text">LinkedIn</div>
        </li>
        
        <li 
          className="iso-pro"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
        >
          <span></span>
          <span></span>
          <span></span>
          <button onClick={handleEmailClick} className="social-link">
            <Mail className="social-svg" />
          </button>
          <div className="social-text email-text">
            {showEmail ? 'moateztilouch@gmail.com' : 'Email'}
          </div>
        </li>
      </ul>

      <style jsx>{`
        .social-card {
          max-width: fit-content;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          gap: 1rem;
          backdrop-filter: blur(15px);
          box-shadow: 
            inset 0 0 20px rgba(139, 92, 246, 0.2),
            inset 0 0 5px rgba(139, 92, 246, 0.3), 
            0 5px 15px rgba(139, 92, 246, 0.1);
          transition: 0.5s;
          background: rgba(17, 24, 39, 0.3);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .social-card:hover {
          background: rgba(139, 92, 246, 0.05);
          box-shadow: 
            inset 0 0 20px rgba(139, 92, 246, 0.3),
            inset 0 0 5px rgba(139, 92, 246, 0.4), 
            0 5px 20px rgba(139, 92, 246, 0.2);
        }

        .social-card ul {
          padding: 1rem;
          display: flex;
          list-style: none;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
          flex-direction: column;
          margin: 0;
        }

        .social-card ul li {
          cursor: pointer;
          position: relative;
        }

        .social-link {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-svg {
          transition: all 0.3s;
          padding: 1rem;
          height: 60px;
          width: 60px;
          border-radius: 100%;
          color: #8b5cf6;
          box-shadow: 
            inset 0 0 20px rgba(139, 92, 246, 0.3),
            inset 0 0 5px rgba(139, 92, 246, 0.5), 
            0 5px 5px rgba(0, 0, 0, 0.164);
          background: rgba(17, 24, 39, 0.8);
        }

        .social-text {
          opacity: 0;
          border-radius: 8px;
          padding: 8px 12px;
          transition: all 0.3s;
          color: white;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          position: absolute;
          z-index: 9999;
          box-shadow: 
            -5px 0 1px rgba(139, 92, 246, 0.2),
            -10px 0 1px rgba(139, 92, 246, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.2),
            inset 0 0 5px rgba(255, 255, 255, 0.3), 
            0 5px 15px rgba(0, 0, 0, 0.2);
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .email-text {
          min-width: 120px;
          text-align: center;
        }

        .iso-pro {
          transition: 0.5s;
          position: relative;
        }

        .iso-pro:hover .social-link > .social-svg {
          transform: translate(15px, -15px);
          border-radius: 100%;
          color: white;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
        }

        .iso-pro:hover .social-text {
          opacity: 1;
          transform: translate(25px, -2px) skew(-5deg);
        }

        .iso-pro:hover .social-svg {
          transform: translate(5px, -5px);
        }

        .iso-pro span {
          opacity: 0;
          position: absolute;
          border: 2px solid #8b5cf6;
          box-shadow: 
            inset 0 0 20px rgba(139, 92, 246, 0.3),
            inset 0 0 5px rgba(139, 92, 246, 0.5), 
            0 5px 5px rgba(0, 0, 0, 0.164);
          border-radius: 50%;
          transition: all 0.3s;
          height: 60px;
          width: 60px;
          background: rgba(139, 92, 246, 0.1);
        }

        .iso-pro:hover span {
          opacity: 1;
        }

        .iso-pro:hover span:nth-child(1) {
          opacity: 0.2;
          background: rgba(139, 92, 246, 0.1);
        }

        .iso-pro:hover span:nth-child(2) {
          opacity: 0.4;
          transform: translate(5px, -5px);
          background: rgba(139, 92, 246, 0.15);
        }

        .iso-pro:hover span:nth-child(3) {
          opacity: 0.6;
          transform: translate(10px, -10px);
          background: rgba(139, 92, 246, 0.2);
        }

        /* GitHub specific colors */
        .iso-pro:nth-child(1):hover span {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
        }

        .iso-pro:nth-child(1):hover .social-svg {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }

        /* LinkedIn specific colors */
        .iso-pro:nth-child(2):hover span {
          border-color: #06b6d4;
          background: rgba(6, 182, 212, 0.1);
        }

        .iso-pro:nth-child(2):hover .social-svg {
          background: linear-gradient(135deg, #06b6d4, #0891b2);
        }

        /* Gmail specific colors */
        .iso-pro:nth-child(3):hover span {
          border-color: #ec4899;
          background: rgba(236, 72, 153, 0.1);
        }

        .iso-pro:nth-child(3):hover .social-svg {
          background: linear-gradient(135deg, #ec4899, #be185d);
        }
      `}</style>
    </div>
  )
}
