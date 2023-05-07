import { useState, useEffect } from "react";
// import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full"
        >
          <i className="bi bi-arrow-up-short"></i>
          {/* <FaArrowCircleUp /> */}
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
