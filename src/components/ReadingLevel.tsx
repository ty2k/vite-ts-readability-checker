import { ReadingLevel as ReadingLevelInterface } from "../lib/checkReadingLevel";

import "./ReadingLevel.css";

interface ReadingLevelProps {
  data: ReadingLevelInterface;
}

export function ReadingLevel({ data }: ReadingLevelProps) {
  return (
    <div className="reading-level">
      <div className="score-pill">
        <label htmlFor="reading-ease" className="sans-serif">
          Reading ease score
        </label>
        <p id="reading-ease" className="mono">
          {data?.readingEase && data.readingEase !== "NaN"
            ? data.readingEase
            : "N/A"}
        </p>
      </div>

      <div className="score-pill">
        <label htmlFor="reading-grade-level" className="sans-serif">
          Reading grade level
        </label>
        <p id="reading-ease" className="mono">
          {data?.readingEaseSchoolLevel && data.readingEaseSchoolLevel?.grade
            ? data.readingEaseSchoolLevel.grade
            : "N/A"}
        </p>
      </div>

      <div className="score-pill">
        <label htmlFor="reading-grade-level" className="sans-serif">
          F-K reading grade
        </label>
        <p id="reading-ease" className="mono">
          {data?.readingGrade && data.readingGrade !== "NaN"
            ? data.readingGrade
            : "N/A"}
        </p>
      </div>
    </div>
  );
}
