import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css/animate.min.css";
import "@radix-ui/themes/styles.css";
import App from "./App";
import "./firebase/initFirebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
