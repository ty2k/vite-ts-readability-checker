type HTMLParagraph = `<p>${string}</p>`;

export function getTextFromHtmlParagraph(htmlParagraph: HTMLParagraph): string {
  const paragraphRegex = /<p\b[^>]*>(.*?)<\/p>/;

  const arr = htmlParagraph
    .split(paragraphRegex)
    .filter((chunk) => chunk !== "");

  return arr.length > 0 ? arr[0] : "";
}
