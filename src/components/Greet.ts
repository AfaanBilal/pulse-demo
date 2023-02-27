/**
 * Pulse Demo
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { createPulse, createMonitor } from "@afaanbilal/pulse";

const Greet = () => {
    console.log("Greet running.");

    const [name, setName] = createPulse("");
    const greeting = () => name() ? `Hello, ${name()}!` : ``;

    const input = document.createElement("input") as HTMLInputElement;
    input.oninput = (e) => setName(((e.currentTarget) as HTMLInputElement).value);
    input.placeholder = "What's your name?";
    input.className = "input-name";
    createMonitor(() => input.value = name());

    const h1 = document.createElement("h1");
    h1.className = "name";
    createMonitor(() => h1.innerText = greeting());

    const div = document.createElement("div");

    div.append(input);
    div.append(h1);

    return div;
};

export default Greet;
