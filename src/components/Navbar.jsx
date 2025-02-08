import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarHandler = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  };

  const [width, setWidth] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setWidth(true);
      } else {
        setWidth(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <header>
      <nav id="#home" className={`fixed bg-white top-0 left-0 w-full z-50`}>
        <div
          className={`flex container px-4 mx-auto max-w-6xl justify-between items-center h-16 md:h-20 lg:h-[5rem]`}
        >
          <Link
            to="/"
            className="text-2xl gap-3 flex items-center justify-center font-bold transition-colors"
          >
            <svg
              className="w-10 h-10"
              preserveAspectRatio="xMidYMid meet"
              data-bbox="23 48.667 155.017 103.333"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="23 48.667 155.017 103.333"
              height="200"
              width="200"
              data-type="color"
              role="img"
              aria-label="Homepage"
            >
              <defs></defs>
              <g>
                <path
                  fill="#000002"
                  d="M23 100.334c0-28.535 23.132-51.667 51.667-51.667 28.534 0 51.666 23.132 51.666 51.667S103.201 152 74.667 152C46.132 152 23 128.869 23 100.334Z"
                  data-color="1"
                ></path>
                <path
                  fill="#000002"
                  d="M126.333 48.667a51.666 51.666 0 1 1 0 103.333V48.667Z"
                  data-color="1"
                ></path>
              </g>
            </svg>
            <h1 className="text-[18px] font-semibold">Crown2ADF</h1>
          </Link>

          <ul className="hidden lg:flex items-center justify-center space-x-8">
            <li>
              <Link
                to="/"
                className="text-black  transition-all hover:text-purple-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-black  transition-all hover:text-purple-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-black  transition-all hover:text-purple-600"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button className="lg:hidden text-2xl" onClick={navbarHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              fill="#fff"
              stroke="#fff"
              className="w-8 invert h-8"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </button>
        </div>

        <div
          id="mobileMenu"
          className="hidden container mx-auto max-w-7xl px-4 bg-white text-black p-5 space-y-3"
        >
          <Link
            onClick={navbarHandler}
            to="/"
            className="block  py-2 px-4 rounded"
          >
            Home
          </Link>
          <Link
            onClick={navbarHandler}
            to="/about"
            className="block  py-2 px-4 rounded"
          >
            About
          </Link>
          <Link
            onClick={navbarHandler}
            to="/contact"
            className="block  py-2 px-4 rounded"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
