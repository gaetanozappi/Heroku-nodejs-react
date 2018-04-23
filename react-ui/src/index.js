import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/App';
import './css/Index.css';

const initializeApp = (Component) => {
  ReactDOM.render(<Component/>,document.getElementById('root'))
}

initializeApp(App);
