// import React from 'react'
// import './Map2d.css'
// import '../../asset/main.css'
// import esriLoader from 'esri-loader'
// class Map2d extends React.Component{
//    tileMapUrl: any;
//   constructor(props:any){
//     super(props);
//     this.tileMapUrl ='http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer'
//   }

//   componentDidMount() {
//     this.initMap();
//   }

//   render(){
//     return (
//       <div id="map2d"></div>
//     );
//   }

//   initMap(){
//     const mapURL = {
//       url : "https://js.arcgis.com/4.13/dojo/dojo.js"
//     }
//     esriLoader.loadModules([
//       "esri/Map",
//       "esri/Basemap",
//       "esri/layers/TileLayer", 
//       "esri/views/MapView",
//       "dojo/domReady!"
//     ], mapURL).then(([Map,Basemap,TileLayer,MapView])=>{
//         let layer = new TileLayer({
//           url: this.tileMapUrl       
//         })
//         let baseMap = new Basemap({
//           baseLayers: [layer],  
//           title: "Custom Basemap",  
//           id: "myBasemap" 
//         });
//         // Create a Map instance
//         let map = new Map({
//           basemap: baseMap
//         });

//         // Create a MapView instance (for 2D viewing) and reference the map instance
//         let view = new MapView({
//           center : [120.2, 32.1],
//           map: map,
//           container : "map2d",
//           zoom:5
//         });
//         console.log(view)
//     });

//   }
// }
// export default Map2d;







import React from 'react'
import './Map2d.css'
import '../../asset/main.css'
import esriLoader from 'esri-loader'
class Map2d extends React.Component{
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
      <div id="map2d"></div>
    );
  }

  initMap(){
    const mapURL = {
      url : "https://js.arcgis.com/4.13/dojo/dojo.js"  // dojo框架
    }
    esriLoader.loadModules([
      "esri/Map",
      // "esri/Basemap",
      // "esri/layers/TileLayer", 
      "esri/views/MapView",
      // "dojo/domReady!"
    ], mapURL).then(([Map,MapView])=>{
        
        // Create a Map instance
        let map = new Map({
          basemap: 'streets-navigation-vector'
        });

        // Create a MapView instance (for 2D viewing) and reference the map instance
        let view = new MapView({
          container : "map2d",
          center : [120.2, 32.1],
          map: map,
          zoom:5
        });
        console.log(view)
    });

  }
}
export default Map2d;