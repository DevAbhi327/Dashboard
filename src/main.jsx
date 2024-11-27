import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import OneenStore from "./redux/OneenStore.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={OneenStore}>
    <App />
  </Provider>
);
