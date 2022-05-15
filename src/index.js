import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7gMLd8S31ir214XMd5YXDjyWTTGMbhvc",
  authDomain: "curso-react-343a2.firebaseapp.com",
  projectId: "curso-react-343a2",
  storageBucket: "curso-react-343a2.appspot.com",
  messagingSenderId: "131257466864",
  appId: "1:131257466864:web:dff0e1df12689bd252e735",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
