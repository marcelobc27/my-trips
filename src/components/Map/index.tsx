import { useRouter } from "next/router";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

type Place = {
  id: string,
  name: string,
  slug: string,
  location: {
    latitude: number,
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({places} : MapProps) => {
  const router = useRouter()
  return (
    <MapContainer center={[51.505, -0.09]} zoom={3} style={{height: "100%", width: "100%", backgroundColor: "transparent"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({id, slug, name, location}) => {
        const { latitude, longitude } = location

        return(
          <Marker 
            key={`place=${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
          >  
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        )
      })}
    </MapContainer>
  );
};

export default Map;
