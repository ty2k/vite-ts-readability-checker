export type ReadingEase = {
  max: number;
  min: number;
  grade: string;
  note: string;
};

export const readingEaseLevels: ReadingEase[] = [
  {
    max: 100,
    min: 90,
    grade: "5",
    note: "Very easy to read. Easily understood by an average 11-year-old student.",
  },
  {
    max: 90,
    min: 80,
    grade: "6",
    note: "Easy to read. Conversational English for consumers.",
  },
  {
    max: 80,
    min: 70,
    grade: "7",
    note: "Fairly easy to read.",
  },
  {
    max: 70,
    min: 60,
    grade: "8-9",
    note: "Plain English. Easily understood by 13- to 15-year-old students.",
  },
  {
    max: 60,
    min: 50,
    grade: "10-12",
    note: "Fairly difficult to read.",
  },
  {
    max: 50,
    min: 30,
    grade: "College",
    note: "Difficult to read.",
  },
  {
    max: 30,
    min: 10,
    grade: "College graduate",
    note: "Very difficult to read. Best understood by university graduates.",
  },
  {
    max: 10,
    min: 0,
    grade: "Professional",
    note: "Extremely difficult to read. Best understood by university graduates.",
  },
];
