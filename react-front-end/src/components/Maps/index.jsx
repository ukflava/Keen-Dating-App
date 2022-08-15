import { Map, Marker } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';
import { useState, useEffect } from 'react';

const Maps = (props) => {
  const [center, setCenter] = useState([...props.coords]);
  const color = `#32003a`;

  // Added a set timeout so actual api call can get made moment user stops moving the map
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
  );
};

export default Maps;