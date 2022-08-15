import { Map, Marker } from 'pigeon-maps';
import { osm, stamenToner  } from 'pigeon-maps/providers';
import { useState, useEffect } from 'react';

const Maps = (props) => {
  const [center, setCenter] = useState([49.171688, -122.679109]);

  const color = `#32003a`;

  useEffect(() => {
    let delay = setTimeout(() => {
      props.newLocation(center);
    }, 2000)
    
    return () => {
      clearTimeout(delay);
    }
  }, [center])

  return (
    <>
      <Map className='pigeon-map-main w-full'  provider={osm}
      center={center} zoom={10} height={400} onBoundsChanged={e => setCenter([...e.center])}>
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