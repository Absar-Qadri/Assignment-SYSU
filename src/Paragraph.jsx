// Paragraph.js
import React, { useState } from "react";

function Paragraph({ sorted, mappable }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const paragraphStyle = {
    maxHeight: isExpanded ? "none" : "119px",
    overflowY: "auto",
  };

  return (
    <div className="show-para">
      {sorted(mappable)}
      <button onClick={toggleExpand}>
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}

export default Paragraph;
