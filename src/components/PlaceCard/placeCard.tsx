import "./placeCard.css";

interface PlaceCardProps {
  img: string;
  // placeName: string;
  // location: string;
  // country: string;
  // mapLink: string;
  // description: string;
}

export function PlaceCard(props: PlaceCardProps) {
  return (
    <div className="container">
      <img className="place-img" src={props.img} alt="{props.placeName} img" />
    </div>
  );
}
