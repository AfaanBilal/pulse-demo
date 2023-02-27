/**
 * Pulse Demo
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import "./style.css";
import Greet from "./components/Greet";
import Counter from "./components/Counter";

const App = () => {
    console.log("App running.");

    const div = document.createElement("div");

    div.append(Greet());
    div.append(document.createElement("hr"));
    div.append(Counter());

    return div;
};

document.getElementById("app")?.append(App());
