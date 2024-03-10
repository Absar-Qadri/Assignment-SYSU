import React from "react";

export function CategoryLists({ handleCategorySelect2, categories }) {
  return (
    <ul className="search-list search-list-2">
      {categories.map((category) => (
        <MappedList
          category={category}
          handleCategorySelect2={handleCategorySelect2}
          key={category}
        />
      ))}
    </ul>
  );
}
function MappedList({ category, handleCategorySelect2 }) {
  return (
    <li key={category} onClick={() => handleCategorySelect2(category)}>
      {category}
    </li>
  );
}
