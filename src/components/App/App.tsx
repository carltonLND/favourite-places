import { Banner } from "../Banner/banner";
import { PlaceCard } from "../PlaceCard/placeCard";
import "./App.css";

const placesArray = [
  {
    img: "https://images.unsplash.com/photo-1603578212992-114102235cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Lands End",
    placeName: "Cornwall",
    countryName: "England",
    mapLink:
      "https://www.google.com/maps/place/Land's+End/@50.0657041,-5.7131746,17z/data=!3m1!4b1!4m6!3m5!1s0x486ac6fe47c0784b:0xf059c1cab9067f1f!8m2!3d50.0657041!4d-5.7131746!16zL20vMDRsNGY?entry=ttu",
    description:
      "Land's End is a headland and tourist and holiday complex in western Cornwall, England, on the Penwith peninsula about eight miles west-south-west of Penzance at the western end of the A30 road. To the east of it is the English Channel, and to the west the Celtic Sea.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/1920px-London-Eye-2009.JPG",
    title: "London Eye",
    placeName: "London",
    countryName: "England",
    mapLink:
      "https://www.google.com/maps/place/London+Eye/@51.5032288,-0.119625,17z/data=!3m1!4b1!4m6!3m5!1s0x487604c71a3d651f:0x72367f97712bc0ee!8m2!3d51.5032288!4d-0.119625!16s%2Fg%2F11c318dz5z?entry=ttu",
    description:
      "The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. It is Europe's tallest cantilevered observation wheel, and the most popular paid tourist attraction in the United Kingdom with over three million visitors annually.",
  },
];

function App() {
  return (
    <div className="App">
      <Banner text="My Favourite Places" />
      <PlaceCard places={placesArray} />
      <Banner text="Footer Stuff" />
    </div>
  );
}

export default App;
