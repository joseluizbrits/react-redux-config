import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/configureStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Disponibilizando a store com os estados para todos os componentes */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
