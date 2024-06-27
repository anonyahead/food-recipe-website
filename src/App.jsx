import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import "./App.css"
import FoodDetails from "./components/FoodDetails";
export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId]=useState("656329")
  return (
    <div className="root">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
        <FoodList foodData={foodData} setFoodData={setFoodData} setFoodId={setFoodId}/>
        </InnerContainer>
      <InnerContainer>
        <FoodDetails foodId={foodId}/>
      </InnerContainer>
      </Container>
     
    </div>
  );
}
