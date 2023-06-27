import "./placeCard.css";

export interface PlaceCardProps {
  img: string;
  title: string;
  placeName: string;
  countryName: string;
  mapLink: string;
  description: string;
}

export function PlaceCard({ places }: { places: PlaceCardProps[] }) {
  return (
    <>
      {places.map((place, index) => (
        <div key={index} className="container">
          <img
            className="place-img"
            src={place.img}
            alt="{place.placeName} img"
          />
          <h2 className="place-title">{place.title}</h2>
          <h4 className="place-info">
            {place.placeName}, {place.countryName} (
            <a className="map-link" href={place.mapLink}>
              map link
            </a>
            )
          </h4>
          <div className="place-desc">
            <p>{place.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
