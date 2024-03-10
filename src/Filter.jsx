import React from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";

export function Filter({ stories, handleflip, flipped }) {
  return (
    <div className="filter">
      <h1 className="total-story">
        <span>
          {stories === 1
            ? `${stories} story`
            : stories === 0
            ? `0 story`
            : `${stories} stories`}
        </span>{" "}
        for you to read
      </h1>
      <div className="flex-filter">
        <h2 className="filter-heading">
          Sort:
          <span onClick={handleflip}>
            {flipped ? `Newest to Oldest` : `Oldest to Newest`}
          </span>
        </h2>
        <CgArrowsExchangeAltV className="filterarrow" onClick={handleflip} />
      </div>
    </div>
  );
}
