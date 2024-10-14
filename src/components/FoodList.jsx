import FoodItem from "./FoodItem";
import PropTypes from "prop-types";

FoodList.propTypes = {
  foodData: PropTypes.array.isRequired,
  setFoodId: PropTypes.func.isRequired,
};

export default function FoodList({ foodData, setFoodId }) {
  const foodItems = Array.isArray(foodData) ? foodData : [];

  if (foodItems.length === 0) {
    return <div>No food items available</div>;
  }
  {
    console.log(foodData);
  }
  return (
    <div className="flex justify-center">
      <ul>
        {foodItems.map((food) => (
          <FoodItem
            key={food.id}
            id={food.id}
            name={food.title}
            image={food.image}
            setFoodId={setFoodId}
          />
        ))}
      </ul>
    </div>
  );
}
