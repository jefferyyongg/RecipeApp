import { useEffect, useState } from "react";
import PropTypes from "prop-types";

FoodDetails.propTypes = {
  foodId: PropTypes.number.isRequired,
};

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=aa9726b18de24dbe99e80ddd55dff36e`
        );
        const data = await response.json();
        setFood(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }

    if (foodId) {
      getRecipeDetails();
    }
  }, [foodId]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-3xl mx-auto">
      {food.title ? (
        <div className="flex flex-col">
          <img
            src={food.image}
            alt={food.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {food.title}
            </h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <InfoItem icon="clock" text={`${food.readyInMinutes} Minutes`} />
              <InfoItem icon="users" text={`${food.servings} Servings`} />
              <InfoItem icon="heart" text={`${food.aggregateLikes} Likes`} />
              <InfoItem
                icon="chart-bar"
                text={`${food.healthScore}/100 Health Score`}
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {renderBadges(food)}
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Summary
              </h3>
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: food.summary }}
              ></p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Ingredients
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {food.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                Instructions
              </h3>
              <div
                className="text-gray-600"
                dangerouslySetInnerHTML={{ __html: food.instructions }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center py-8 text-gray-500">
          Select a recipe to view details
        </p>
      )}
    </div>
  );
}

function InfoItem({ icon, text }) {
  return (
    <div className="flex items-center">
      <svg
        className="w-5 h-5 text-gray-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {getIconPath(icon)}
      </svg>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}

function getIconPath(icon) {
  switch (icon) {
    case "clock":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      );
    case "users":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      );
    case "heart":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      );
    case "chart-bar":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        ></path>
      );
    default:
      return null;
  }
}

function renderBadges(food) {
  const badges = [
    { condition: food.vegetarian, text: "Vegetarian", color: "green" },
    { condition: food.vegan, text: "Vegan", color: "green" },
    { condition: food.glutenFree, text: "Gluten-Free", color: "blue" },
    { condition: food.dairyFree, text: "Dairy-Free", color: "blue" },
    { condition: food.veryHealthy, text: "Very Healthy", color: "green" },
    { condition: food.cheap, text: "Cheap", color: "yellow" },
    { condition: food.veryPopular, text: "Very Popular", color: "purple" },
    { condition: food.sustainable, text: "Sustainable", color: "green" },
  ];

  return badges
    .filter((badge) => badge.condition)
    .map((badge, index) => (
      <span
        key={index}
        className={`px-3 py-1 rounded-full text-sm font-medium bg-${badge.color}-100 text-${badge.color}-800`}
      >
        {badge.text}
      </span>
    ));
}
