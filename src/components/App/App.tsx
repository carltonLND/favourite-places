import { Header } from "../Header/header";
import { PlaceCard } from "../PlaceCard/placeCard";
import "./App.css";

const landsEnd = {
  img: "https://images.unsplash.com/photo-1603578212992-114102235cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
};

function App() {
  return (
    <div className="App">
      <Header />
      <PlaceCard {...landsEnd} />
    </div>
  );
}

export default App;
