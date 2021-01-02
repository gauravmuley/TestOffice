import React, { useState, useEffect} from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as LocationData from "../Data/parks.json"
import '../App.css'
import parkimg from '../Components/park.png'
{/* <link href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css' rel='stylesheet' /> */}


const MapBoxDemo = () => {

    const [viewport, setViewport] = useState({
        latitude: 21.150412,
        longitude: 79.0839,
        width: "100vw",
        height: "100vh",
        zoom: 10
      });

 //   const  mapboxgl.accessToken = 'pk.eyJ1Ijoibmdva2F0dGEiLCJhIjoiY2tqMnRsYzI4NWFieDMxcWozc3ZvbmpibSJ9.zh-HVVdesY92dpgCUMUUQg';

    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const listener = e => {
          if (e.key === "Escape") {
            setSelectedLocation(null);
          }
        };
        window.addEventListener("keydown", listener);
    
        return () => {
          window.removeEventListener("keydown", listener);
        };
      }, []); 
     
          
    return (
        <div>
            <ReactMapGL
                {...viewport}
                // mapboxApiAccessToken ="pk.eyJ1Ijoibmdva2F0dGEiLCJhIjoiY2tqMzVsNmJiNWNzajJ2cWoyYnAzMXNsbyJ9.JhuMncaA04qpiU0EYpcNDA"
                mapboxApiAccessToken = "pk.eyJ1IjoiZ2F1cmF2bXVsIiwiYSI6ImNramEyeDJjYTc5MmEyeHFqbHE4a3R4azYifQ.ndnv0xFuqBucESvGzSzZFQ"
                mapStyle="mapbox://styles/gauravmul/ckja2suy7hygx19s36lxbm210"
                onViewportChange={viewport => {setViewport(viewport)}}
            >
               {LocationData.features.map(Location => (
                    <Marker
                        key={Location.properties.Location_ID}
                        latitude={Location.geometry.coordinates[0]}
                        longitude={Location.geometry.coordinates[1]}                        
                    >
                      <button className="maker-btn"
                        onClick={e => { 
                          e.preventDefault();
                          setSelectedLocation(Location)
                          console.log(Location.geometry.coordinates[0],
                            Location.geometry.coordinates[1],Location.properties.NAME)

                    }}
                    >
                    {/* <img src={parkimg} className="marker-img" alt="Park Icon" />     */}
                    </button>
                    </Marker>
                ))}
                 {selectedLocation ? (
          <Popup
            latitude={selectedLocation.geometry.coordinates[0]}
            longitude={selectedLocation.geometry.coordinates[1]}
            onClose={() => {
              setSelectedLocation(null);
            }}
          >
            <div>
              <h3>{selectedLocation.properties.NAME}</h3>
              <p>{selectedLocation.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        ) : null} 
            </ReactMapGL>
               
        </div>
    )
}

export default MapBoxDemo