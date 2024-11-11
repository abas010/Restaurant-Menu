import React, { useState } from "react";

const Categories = ({ categories, onFiltered }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            // highlight class  for highlight main category
            onClick={() => {
              setActiveCategory(category);
              onFiltered(category);
            }}
            className={`mt-2 ${
              category === activeCategory
                ? "filter-btn highlight"
                : "filter-btn"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
