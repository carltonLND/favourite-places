import "./placeCard.css";

export interface PlaceCardProps {
  img: string;
  title: string;
  placeName: string;
  countryName: string;
  mapLink: string;
  description: string;
}

export function PlaceCard(props: PlaceCardProps) {
  return (
    <div className="container">
      <img className="place-img" src={props.img} alt="{props.placeName} img" />
      <h2 className="place-title">{props.title}</h2>
      <h4 className="place-info">
        {props.placeName}, {props.countryName} (
        <a className="map-link" href={props.mapLink}>
          map link
        </a>
        )
      </h4>
      <div className="place-desc">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
