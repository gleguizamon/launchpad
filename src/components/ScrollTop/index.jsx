import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    !showScroll && window.pageYOffset > 400
      ? setShowScroll(true)
      : showScroll && window.pageYOffset <= 400
      ? setShowScroll(false)
      : null;
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <FaArrowCircleUp
        className="fixed f1 items-center justify-center pointer scrollTop primary"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
      />
      <style jsx>{`
        .scrollTop {
          bottom: 30px;
          right: 30px;
          height: 20px;
          z-index: 1000;
          animation: fadeIn 0.5s;
          transition: opacity 0.4s;
        }

        .scrollTop:hover {
          opacity: 0.7;
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
