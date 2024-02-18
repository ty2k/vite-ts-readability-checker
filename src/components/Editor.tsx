import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./Editor.css";

const extensions = [StarterKit];

interface TipTapEditorProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export function TiptapEditor({
  content,
  setContent,
  setText,
}: TipTapEditorProps): React.ReactNode {
  const editor = useEditor({
    extensions,
    content,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
      setText(editor.getText());
    },
  });

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
    </div>
  );
}
