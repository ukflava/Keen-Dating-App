import { Map, Marker } from 'pigeon-maps';
import { osm, stamenToner  } from 'pigeon-maps/providers';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Maps = (props) => {
  const [center, setCenter] = useState([...props.coords]);
  const [zoom, setZoom] = useState(11)

  const color = `#32003a`;

  useEffect(() => {
    let delay = setTimeout(() => {
      props.newLocation(center);
    }, 2000)
    
    return () => {
      clearTimeout(delay);
    }
  }, [center]);

  return (
    <>
      <Map className='pigeon-map-main w-full'  provider={osm}
      center={center} zoom={9} height={400} onBoundsChanged={(e) => {setCenter([...e.center])}}>
        <Marker 
          width={50}
          anchor={[...center]} 
          color={color} 
        />
      </Map>
    </>
    )
};

export default Maps;