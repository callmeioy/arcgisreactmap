import React from 'react';
import ReactDOM from 'react-dom';
import './asset/main.css'
import * as serviceWorker from './serviceWorker';
// import Map2d from './component/map2d/Map2d';
import Map3d from './component/map3d/Map3d';

// ReactDOM.render(<Map2d />, document.getElementById('root'));
ReactDOM.render(<Map3d />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();
