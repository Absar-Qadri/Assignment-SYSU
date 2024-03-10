import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Star({ color = "#fcc419", size = 48, ClassName = "", search }) {
  // State to track active searches. Object format: { 'searchTerm1': true, 'searchTerm2': false, ... }
  const [activeSearches, setActiveSearches] = useState(() => {
    // Attempt to retrieve and parse the stored active searches object from localStorage
    const stored = localStorage.getItem("activeSearches");
    return stored ? JSON.parse(stored) : {};
  });

  // Determine if the current search term is active
  const isActive = !!activeSearches[search];

  useEffect(() => {
    // Effect to synchronize the activeSearches state with localStorage
    localStorage.setItem("activeSearches", JSON.stringify(activeSearches));
  }, [activeSearches]);

  const handleToggle = () => {
    // Toggle the active state for the current search term
    const updatedActiveSearches = {
      ...activeSearches,
      [search]: !isActive,
    };
    setActiveSearches(updatedActiveSearches);
  };

  // Dummy implementations for hover effects (if needed)
  const handleMouseEnter = () => {};
  const handleMouseLeave = () => {};

  const starStyle = {
    cursor: "pointer",
    display: "block",
    width: `${size}px`,
    height: `${size}px`,
    color: isActive ? color : "grey", // Change color based on active state
  };

  return (
    <div className={ClassName}>
      <span
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={starStyle}
      >
        {isActive ? (
          // Render filled star for active state
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={color}
            style={starStyle}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          // Render outlined star for inactive state
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={starStyle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        )}
      </span>
    </div>
  );
}

Star.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  ClassName: PropTypes.string,
  search: PropTypes.string,
};

export default Star;
