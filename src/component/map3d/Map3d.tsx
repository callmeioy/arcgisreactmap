import React from 'react'
import './Map3d.scss'
import '../../asset/main.css'
import esriLoader from 'esri-loader'
class Map3d extends React.Component{
   tileMapUrl: any;
  constructor(props:any){
    super(props);
    this.tileMapUrl ='http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
  }

  componentDidMount() {
    this.initMap();
  }

  render(){
    return (
      <div id="map3d">
      </div>
    );
  }

  initMap(){
    const mapURL = {
      url : "https://js.arcgis.com/4.13/dojo/dojo.js"
    }
    esriLoader.loadModules([
      "esri/Map",
      "esri/views/SceneView",
      "dojo/domReady!"
    ], mapURL).then(([Map,SceneView])=>{
        // Create a Map instance
        let map = new Map({
          basemap: "topo-vector",
          ground: "world-elevation"  // show elevation
        });

        // Create a MapView instance (for 2D viewing) and reference the map instance
        let view = new SceneView({
          container : "map3d",
          map,
          camera:{
            position: {  // observation point
              x: -118.80800,
              y: 33.96100,
              z: 25000 // altitude in meters
            },
            tilt: 65  // perspective in degrees
          },
        });
        console.log(map,view)
    });

  }
}
export default Map3d;