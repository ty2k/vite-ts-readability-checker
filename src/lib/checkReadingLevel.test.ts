import { describe, it, expect } from "vitest";
import {
  getReadingLevelDataFromParagraph,
  getSentencesFromParagraph,
  getTextFromHtmlParagraph,
} from "./checkReadingLevel";

describe("getTextFromHtmlParagraph()", () => {
  it("returns the inner text from a string of paragraph HTML", () => {
    const htmlParagraph = "<p>Hello world.</p>";
    const text = getTextFromHtmlParagraph(htmlParagraph);

    expect(text).toEqual("Hello world.");
  });
});

describe("getSentencesFromParagraph()", () => {
  it("returns an array of sentences from a string of paragraph text", () => {
    const paragraph = "Hello world. The quick brown fox? The end!";
    const sentences = getSentencesFromParagraph(paragraph);

    expect(sentences.length).toEqual(3);
    expect(sentences[0]).toEqual("Hello world");
    expect(sentences[1]).toEqual("The quick brown fox");
    expect(sentences[2]).toEqual("The end");
  });
});

describe("getReadingLevelDataFromParagraph()", () => {
  it("returns an object of reading ease level data for a paragraph", () => {
    const paragraph = "Hello world. Orange you glad I didn't say banana? End!";
    const data = getReadingLevelDataFromParagraph(paragraph);

    expect(data.readingEase).toEqual("76.55");
    expect(data.readingEaseSchoolLevel?.grade).toEqual("7");
    expect(data.readingGrade).toEqual("3.41");
  });
});
