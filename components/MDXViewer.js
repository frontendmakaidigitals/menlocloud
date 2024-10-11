"use client";
import {
  MDXEditor,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  ListsToggle,
  CreateLink,
  InsertThematicBreak,
  UndoRedo,
  BlockTypeSelect,
  linkDialogPlugin,
  listsPlugin,
  thematicBreakPlugin,
  quotePlugin,
  headingsPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import "../styles/globals.css";
import { useEffect } from "react";
const Editor = ({ onChange, markdown }) => {
  return (
    <div className="editor-container min-h-[100px]">
      <MDXEditor
        onChange={onChange}
        markdown={markdown && markdown}
        readOnly={true}
        contentEditableClassName="prose"
        plugins={[
          linkDialogPlugin(),
          listsPlugin(),
          thematicBreakPlugin(),
          headingsPlugin(),
          quotePlugin(),
        ]}
      />
    </div>
  );
};

export default Editor;
