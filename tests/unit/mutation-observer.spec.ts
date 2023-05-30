// @vitest-environment jsdom

import { expect, test } from "vitest";
import { isHtmlElement } from "../../src/helpers/mutation-observer";

test("isHtmlElement returns true if HTMLElement is passed.", () => {
  expect(isHtmlElement(document.createElement("div"))).toBe(true);
});

test.each([
  document.createTextNode("div"),
  true,
  false,
  "<p>foo</p>",
  1234,
  Symbol("foo"),
  {},
  [],
  undefined,
  null,
])(
  "isHtmlElement returns false if anything other than an HTMLElement is passed.",
  (value) => {
    expect(isHtmlElement(value)).toBe(false);
  },
);
