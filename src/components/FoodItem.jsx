import PropTypes from "prop-types";
import "./fonts.css";

FoodItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  setFoodId: PropTypes.func.isRequired,
};

export default function FoodItem({ id, name, image, setFoodId }) {
  function handleSetFoodId(e) {
    e.preventDefault();
    setFoodId(id);
  }

  return (
    <div
      className="w-96 bg-white rounded-xl shadow-lg m-4 overflow-hidden cursor-pointer hover:shadow-xl"
      onClick={handleSetFoodId}
    >
      <div className="relative">
        <img className="w-full h-56 object-cover" src={image} alt={name} />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-2xl text-gray-800 mb-3 truncate">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-base text-gray-600">Click to view details</span>
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
