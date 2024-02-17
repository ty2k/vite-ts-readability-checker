import { describe, it, expect } from "vitest";
import { getTextFromHtmlParagraph } from "./checkReadingLevel";

describe("getTextFromHtmlParagraph", () => {
  it("returns the inner text from a string of paragraph HTML", () => {
    const htmlParagraph = "<p>Hello world.</p>";
    const text = getTextFromHtmlParagraph(htmlParagraph);

    expect(text).toEqual("Hello world.");
  });
});
