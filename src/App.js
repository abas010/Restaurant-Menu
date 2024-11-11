import React, { useState } from "react";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import menu from "./data";

const allCategories = ["all", ...new Set(menu.map((menu) => menu.category))];

function App() {
  const [allMenus, setAllMenus] = useState(menu);
  const [categories, setCategoris] = useState(allCategories);

  const filtered = (category) => {
    if (category === "all") {
      setAllMenus(menu);
      return;
    }
    let filterMenu = menu.filter((menu) => menu.category === category);
    setAllMenus(filterMenu);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline">
            <Categories categories={categories} onFiltered={filtered} />
            <Menu allMenus={allMenus} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
