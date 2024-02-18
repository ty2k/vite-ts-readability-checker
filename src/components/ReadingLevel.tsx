import { ReadingLevel as ReadingLevelInterface } from "../lib/checkReadingLevel";

import "./ReadingLevel.css";

interface ReadingLevelProps {
  data: ReadingLevelInterface;
}

export function ReadingLevel({ data }: ReadingLevelProps) {
  // Reading ease
  const readingEase =
    data?.readingEase && data.readingEase !== "NaN" ? data.readingEase : null;
  const readingEaseClass =
    data?.readingEaseIndex > -1 ? `level-${data.readingEaseIndex}` : null;

  // Reading ease school level
  const readingEaseSchoolLevel =
    data?.readingEaseSchoolLevel && data.readingEaseSchoolLevel?.grade
      ? data.readingEaseSchoolLevel.grade
      : null;

  // Reading grade
  const readingGrade =
    data?.readingGrade && data.readingGrade !== "NaN"
      ? data.readingGrade
      : null;

  return (
    <div className="reading-levels">
      <div className={`score-pill ${readingEaseClass}`}>
        <label htmlFor="reading-ease" className="sans-serif">
          Reading ease score{" "}
          <a
            href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease"
            title="More information about Flesch reading ease"
            target="_blank"
          >
            ⓘ
          </a>
        </label>
        <p id="reading-ease" className="mono">
          {readingEase ? readingEase : "N/A"}
        </p>
      </div>

      <div className={`score-pill ${readingEaseClass}`}>
        <label htmlFor="reading-grade-level" className="sans-serif">
          Reading grade level
        </label>
        <p id="reading-ease-school-level" className="mono">
          {readingEaseSchoolLevel ? readingEaseSchoolLevel : "N/A"}
        </p>
      </div>

      <div className={"score-pill"}>
        <label htmlFor="reading-grade-level" className="sans-serif">
          F-K reading grade{" "}
          <a
            href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch%E2%80%93Kincaid_grade_level"
            title="More information about Flesch-Kincaid grade level"
            target="_blank"
          >
            ⓘ
          </a>
        </label>
        <p id="reading-grade" className="mono">
          {readingGrade ? readingGrade : "N/A"}
        </p>
      </div>
    </div>
  );
}
