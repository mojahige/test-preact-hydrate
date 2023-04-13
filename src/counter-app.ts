import { hydrate } from "preact";
import { html } from "htm/preact";
import { Counter } from "./components/counter/index.js";

export function start() {
  const targetElement = document.querySelector("#counter");

  if (!targetElement) {
    throw new Error("Counter app could not find the element to hydrate.");
  }

  hydrate(html`<${Counter} />`, targetElement);
}
