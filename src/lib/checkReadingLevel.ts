type HTMLParagraph = `<p>${string}</p>`;

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
