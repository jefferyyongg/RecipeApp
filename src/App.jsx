import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import FoodDetails from "./components/FoodDetails";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import "./App.css";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <div>
      <Nav />
      <Search setFoodData={setFoodData} />
      <Container>
        <InnerContainer flex={2}>
          <FoodList
            foodData={foodData}
            setFoodData={setFoodData}
            setFoodId={setFoodId}
          />
        </InnerContainer>

        <InnerContainer flex={2}>
          <FoodDetails foodId={foodId} foodData={foodData} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
