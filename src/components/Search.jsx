import PropTypes from "prop-types";
import { useEffect, useState } from "react";

Search.propTypes = {
  foodData: PropTypes.array.isRequired,
  setFoodData: PropTypes.func.isRequired,
};

export default function Search({ setFoodData }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    async function getRecipes() {
      const recipes = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch/?query=" +
          input +
          "&apiKey=aa9726b18de24dbe99e80ddd55dff36e"
      );
      const data = await recipes.json();
      setFoodData(data.results);
    }

    getRecipes();
  }, [input, setFoodData]);

  function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div className="my-8 mx-auto max-w-md">
      <div className="relative">
        <input
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          type="text"
          placeholder="Search for recipes..."
          onChange={(e) => handleInput(e)}
          value={input}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
