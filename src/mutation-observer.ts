import { hydration } from "./hydration.js";

export function isHtmlElement(unknown: unknown): unknown is HTMLElement {
  return unknown instanceof HTMLElement;
}

function mutationCallback(
  mutationsList: MutationRecord[],
  _observer: MutationObserver,
) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const addedNodes = mutation.addedNodes;

      addedNodes.forEach((target) => {
        if (isHtmlElement(target)) {
          hydration(target);
        }
      });
    }
  }
}

export function observe() {
  const observer = new MutationObserver(mutationCallback);

  observer.observe(document.body, { childList: true, subtree: true });
}
