"use client"

export function CubeLoader() {
  return (
    <div className="fixed inset-0 bg-gray-950/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="cubes-container">
        <div className="loop cubes">
          <div className="item cubes cube-1"></div>
          <div className="item cubes cube-2"></div>
          <div className="item cubes cube-3"></div>
          <div className="item cubes cube-4"></div>
          <div className="item cubes cube-5"></div>
          <div className="item cubes cube-6"></div>
        </div>
      </div>
      <div className="loader-content">
        <h1 className="loader-name">Moatez Tilouch</h1>
        <p className="loader-title">Frontend Developer & Tool Explorer</p>
        <div className="loader-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>
      
      <style jsx>{`
        .cubes {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-style: preserve-3d;
        }

        .loop {
          transform: rotateX(-35deg) rotateY(-45deg) translateZ(1.5625em);
        }

        @keyframes s {
          to {
            transform: scale3d(0.2, 0.2, 0.2);
          }
        }

        .item {
          margin: -1.5625em;
          width: 3.125em;
          height: 3.125em;
          transform-origin: 50% 50% -1.5625em;
          box-shadow: 0 0 0.125em currentColor;
          background: currentColor;
          animation: s 0.6s cubic-bezier(0.45, 0.03, 0.51, 0.95) infinite alternate;
        }

        .item:before,
        .item:after {
          position: absolute;
          width: inherit;
          height: inherit;
          transform-origin: 0 100%;
          box-shadow: inherit;
          background: currentColor;
          content: "";
        }

        .item:before {
          bottom: 100%;
          transform: rotateX(90deg);
        }

        .item:after {
          left: 100%;
          transform: rotateY(90deg);
        }

        /* Purple to Pink gradient theme colors */
        .cube-1 {
          margin-top: 6.25em;
          color: #8b5cf6;
          animation-delay: -1.2s;
        }

        .cube-1:before {
          color: #a78bfa;
        }

        .cube-1:after {
          color: #9333ea;
        }

        .cube-2 {
          margin-top: 3.125em;
          color: #a855f7;
          animation-delay: -1s;
        }

        .cube-2:before {
          color: #c084fc;
        }

        .cube-2:after {
          color: #9333ea;
        }

        .cube-3 {
          margin-top: 0em;
          color: #c084fc;
          animation-delay: -0.8s;
        }

        .cube-3:before {
          color: #ddd6fe;
        }

        .cube-3:after {
          color: #a855f7;
        }

        .cube-4 {
          margin-top: -3.125em;
          color: #d946ef;
          animation-delay: -0.6s;
        }

        .cube-4:before {
          color: #f0abfc;
        }

        .cube-4:after {
          color: #c084fc;
        }

        .cube-5 {
          margin-top: -6.25em;
          color: #ec4899;
          animation-delay: -0.4s;
        }

        .cube-5:before {
          color: #f9a8d4;
        }

        .cube-5:after {
          color: #d946ef;
        }

        .cube-6 {
          margin-top: -9.375em;
          color: #06b6d4;
          animation-delay: -0.2s;
        }

        .cube-6:before {
          color: #67e8f9;
        }

        .cube-6:after {
          color: #0891b2;
        }

        .loader-content {
          position: absolute;
          bottom: 30%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 10;
        }

        .loader-name {
          font-size: 2.5rem;
          font-weight: 900;
          background: linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease-in-out infinite;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .loader-title {
          color: #d1d5db;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .loader-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: dot-bounce 1.4s ease-in-out infinite both;
        }

        .dot-1 {
          background-color: #8b5cf6;
          animation-delay: -0.32s;
        }

        .dot-2 {
          background-color: #ec4899;
          animation-delay: -0.16s;
        }

        .dot-3 {
          background-color: #06b6d4;
          animation-delay: 0s;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes dot-bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .loader-name {
            font-size: 2rem;
          }
          
          .loader-title {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  )
}
