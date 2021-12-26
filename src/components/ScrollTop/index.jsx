import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <FaArrowCircleUp
        className="w-100 fixed items-center justify-center pointer scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
      <style jsx>{`
        .scrollTop {
          bottom: 20px;
          height: 20px;
          z-index: 1000;
          animation: fadeIn 0.5s;
          transition: opacity 0.4s;
          opacity: 0.5;
          color: rgb(248, 112, 0);
        }

        .scrollTop:hover {
          opacity: 1;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
};

export default ScrollTop;
