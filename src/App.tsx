import { useEffect, useState } from "react";

import { getReadingLevelDataFromParagraph } from "./lib/checkReadingLevel";

import { TiptapEditor } from "./components/Editor";
import { ReadingLevel } from "./components/ReadingLevel";
import { Instructions } from "./components/Instructions";

import "./App.css";

function App() {
  const [content, setContent] = useState("<p></p>");
  const [text, setText] = useState("");
  const [readingLevel, setReadingLevel] = useState(
    getReadingLevelDataFromParagraph(text)
  );

  useEffect(() => {
    setReadingLevel(getReadingLevelDataFromParagraph(text));
  }, [text]);

  return (
    <main className="app-container">
      <h1 className="serif">Flesch-Kincaid readability</h1>
      <p className="sans-serif">
        Add your paragraph text into the editor below to see your scores.
      </p>
      <TiptapEditor
        content={content}
        setContent={setContent}
        setText={setText}
      />
      <ReadingLevel data={readingLevel} />
      <Instructions />
    </main>
  );
}

export default App;
