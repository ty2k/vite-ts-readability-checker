import BigNumber from "bignumber.js";
import { syllable } from "syllable";

import { readingEaseLevels, ReadingEase } from "./readingEaseLevels";

export type HTMLParagraph = `<p>${string}</p>`;

export function getTextFromHtmlParagraph(htmlParagraph: HTMLParagraph): string {
  const paragraphRegex = /<p\b[^>]*>(.*?)<\/p>/;

  const arr = htmlParagraph
    .split(paragraphRegex)
    .filter((chunk) => chunk !== "");

  return arr.length > 0 ? arr[0] : "";
}

export function getSentencesFromParagraph(paragraph: string): string[] {
  const punctuationRegex = /[!?.]/;

  return paragraph
    .split(punctuationRegex)
    .filter((s) => s !== "")
    .map((s) => s.trim());
}

interface SentenceData {
  sentence: string;
  characters: number;
  words: number;
  syllables: number;
}

export interface ReadingLevel {
  readingEase: string;
  readingEaseSchoolLevel: ReadingEase | undefined;
  readingEaseIndex: number;
  readingGrade: string;
  characterCount: number;
  wordCount: number;
  sentenceCount: number;
  syllableCount: number;
  sentences: SentenceData[];
}

export function getReadingLevelDataFromParagraph(
  paragraph: string
): ReadingLevel {
  const characterCount = paragraph.length;
  const sentences = getSentencesFromParagraph(paragraph);
  const sentenceCount = sentences.length;

  // Word count for the entire paragraph
  let wordCount = 0;
  sentences.forEach((sentence) => (wordCount += sentence.split(" ").length));

  const sentencesData: SentenceData[] = [];
  let syllableCount = 0;

  sentences.forEach((sentence) => {
    syllableCount += syllable(sentence);
    const words = sentence.split(" ");

    const data = {
      sentence,
      characters: sentence.length,
      words: words.length,
      syllables: syllable(sentence),
    };

    sentencesData.push(data);
  });

  // Flesch reading ease
  const wordsOverSentences = BigNumber(wordCount).dividedBy(sentenceCount);
  const syllablesOverWords = BigNumber(syllableCount).dividedBy(wordCount);
  const easeSentenceLengthScore =
    BigNumber(1.015).multipliedBy(wordsOverSentences);
  const easeSyllableScore = BigNumber(84.6).multipliedBy(syllablesOverWords);
  const readingEase = BigNumber(206.835)
    .minus(easeSentenceLengthScore)
    .minus(easeSyllableScore);
  let readingEaseIndex = -1;
  const readingEaseSchoolLevel = readingEaseLevels.find((level, index) => {
    if (readingEase.isGreaterThanOrEqualTo(level.min)) {
      readingEaseIndex = index;
      return true;
    }
  });

  // Flesch-Kincaid grade level
  const gradeSentenceLengthScore =
    BigNumber(0.39).multipliedBy(wordsOverSentences);
  const gradeSyllableScore = BigNumber(11.8).multipliedBy(syllablesOverWords);
  const readingGrade = BigNumber(gradeSentenceLengthScore)
    .plus(gradeSyllableScore)
    .minus(15.59);

  return {
    readingEase: readingEase.toFixed(2),
    readingEaseSchoolLevel,
    readingEaseIndex,
    readingGrade: readingGrade.toFixed(2),
    characterCount,
    wordCount,
    sentenceCount,
    syllableCount,
    sentences: sentencesData,
  };
}

export function getReadingLevelDataFromHtmlParagraph(
  htmlParagraph: HTMLParagraph
): ReadingLevel {
  return getReadingLevelDataFromParagraph(
    getTextFromHtmlParagraph(htmlParagraph)
  );
}
