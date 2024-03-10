import React, { useState, useEffect } from "react";
import { database, ref, onValue } from "./FirebaseConfig";

export default function Popular({ onChildValue }) {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const allDataRef = ref(database, "List");

    onValue(allDataRef, (snapshot) => {
      if (snapshot.exists()) {
        // Assuming the data is an object where each key is a category or similar identifier
        const rawData = snapshot.val();
        const aggregatedData = [];

        Object.keys(rawData).forEach((key) => {
          const items = rawData[key];
          Object.keys(items).forEach((itemKey) => {
            // Aggregate data as needed, for example, by adding the category name or any other identifier
            aggregatedData.push({
              ...items[itemKey],
              category: key,
              id: itemKey,
            });
          });
        });

        setAllData(aggregatedData);
      } else {
        console.log("No data available");
        setAllData([]);
      }
    });
  }, []);

  const subjects = allData.map(({ subject }) => subject);
  // State for dynamically loaded starred searches
  const [starredSearches, setStarredSearches] = useState([]);

  useEffect(() => {
    // Fetch and set starred searches from localStorage
    const storedActiveSearches = JSON.parse(
      localStorage.getItem("activeSearches") || "{}"
    );
    const starredSearchesArray = Object.keys(storedActiveSearches).filter(
      (key) => storedActiveSearches[key]
    );
    setStarredSearches(starredSearchesArray);
  }, []);

  function ListItem({ value }) {
    // Call onChildValue if it's provided; otherwise, do nothing
    const handleClick = () => {
      if (onChildValue) {
        onChildValue(value);
      } else {
      }
    };

    return <li onClick={handleClick}>{value}</li>;
  }

  return (
    <div className="popular">
      <h1>{!onChildValue ? "Favourite Topic" : "Popular Topics"}</h1>

      {/* Display predefined popular searches or starred searches based on where it's called */}
      <div className="list">
        <ul className="list-items">
          {/* Conditionally render this list or a message based on where the component is used */}
          {!onChildValue && starredSearches.length > 0 ? (
            starredSearches.map((search, index) => (
              <ListItem key={index} value={search} />
            ))
          ) : (
            <>
              {onChildValue &&
                subjects.map((subject, i) => (
                  <ListItem value={subject} key={i} />
                ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
