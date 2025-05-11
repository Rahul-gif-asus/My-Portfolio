import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initAnalytics } from "./lib/firebase";

// Initialize Firebase Analytics
initAnalytics().catch(console.error);

// Create root and render app
createRoot(document.getElementById("root")!).render(<App />);
