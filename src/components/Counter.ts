/**
 * Pulse Demo
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 */

import { createPulse, createMonitor } from "@afaanbilal/pulse";

const Counter = () => {
    console.log("Counter running.");

    const [count, setCount] = createPulse(0);

    const h1 = document.createElement("h1");
    h1.className = "count";
    createMonitor(() => h1.innerText = `Count is ${count()}`);

    const btn = document.createElement("button");
    btn.onclick = () => setCount(count() + 1);
    btn.innerText = "Increment";
    btn.className = "btn-increment";

    const div = document.createElement("div");

    div.append(h1);
    div.append(btn);

    return div;
};

export default Counter;
