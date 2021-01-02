import React, {useState, useEffect} from 'react'
import REACTMAPGL, {Marker, Popup} from 'react-map-gl'
import parkimg from '../Components/park.svg'
import '../App.css'
import {Locationtems} from './DataServices'
{/* <link href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css' rel='stylesheet' /> */}


function Firstmap() {

    const [viewport, setViewport] = useState({
        latitude: 21.150412,
        longitude: 79.0839,
        width: "100vw",
        height: "100vh",
        zoom: 10
      });

    const [selectedLocation, setSelectedLocation] = useState(null)  

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
            <REACTMAPGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiZ2F1cmF2bXVsIiwiYSI6ImNramEyeDJjYTc5MmEyeHFqbHE4a3R4azYifQ.ndnv0xFuqBucESvGzSzZFQ"
                onViewportChange={viewport => {setViewport(viewport)}}
            >
                {Locationitems.map(Location => (
                    <Marker
                        key={Location.id}
                        latitude = {Location.LAT}
                        longitude = {Location.Lon}                   
                    >
                      <button className="maker-btn"
                        onClick={e => { 
                          e.preventDefault();
                          setSelectedLocation(Location)
                         
                        }}
                    >
                        {/* <img src={parkimg} className="marker-img" alt="Park Icon" />     */}
                    </button>
                    </Marker> 

                ))} 
               
                {selectedLocation ? (
                    <Popup
                        latitude = {selectedLocation.LAT}
                        longitude = {selectedLocation.Lon}     
                        onClose ={() =>{
                            setSelectedLocation(null)
                        }}
                    >
                        <div>
                            <h3>{selectedLocation.PNAME}</h3>
                            <p>{selectedLocation.DESCP}</p>
                        </div>
                    </Popup>
                ): null} 

            </REACTMAPGL>
            
        </div>
    )
}

export default Firstmap