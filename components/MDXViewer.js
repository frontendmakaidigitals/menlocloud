"use client";
import { MDXEditor } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import "../styles/globals.css";

const Editor = ({ onChange, markdown, editorRef }) => {
  return <MDXEditor markdown={markdown} contentEditableClassName="prose" />;
};

export default Editor;
