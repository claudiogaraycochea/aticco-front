import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import './ui/ui.css';
import { Provider } from 'react-redux';
import store from './store/Store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);