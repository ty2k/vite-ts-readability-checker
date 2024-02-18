import { readingEaseLevels } from "../lib/readingEaseLevels";

import "./Instructions.css";

export function Instructions() {
  return (
    <div className="instructions">
      <h2 className="serif">Instructions</h2>
      <table className="sans-serif">
        <caption>
          Use the table to help interpret your reading ease score.
        </caption>
        <thead>
          <tr>
            <th>Score</th>
            <th>School Level</th>
            <th>Note</th>
          </tr>
        </thead>
        {readingEaseLevels.map((level, index) => {
          return (
            <tr key={index} className={`level-${index}`}>
              <td width="15%">
                {level.max} - {level.min}
              </td>
              <td width="20%">{level.grade}</td>
              <td width="65%">{level.note}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
