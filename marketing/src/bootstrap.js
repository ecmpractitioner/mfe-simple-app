import React from "react";
import ReactDOM from "react-dom";

import App from './App';

console.log("Hi from Marketing MFE");

//mount function to start the app

const mount = (el) => {
  ReactDOM.render(<App/>, el);
};

//check if we are in dev or in isolation mode

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//we are running through container so let's export the mount function

export { mount };
