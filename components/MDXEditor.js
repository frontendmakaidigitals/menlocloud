"use client";

import {
  MDXEditor,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  ListsToggle,
  CreateLink,
  InsertThematicBreak,
  UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { on } from "events";

const Editor = ({ onChange, markdown, editorRef }) => {
  return (
    <MDXEditor
      onChange={onChange}
      markdown={markdown}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <CreateLink />
              <InsertThematicBreak />
              <UndoRedo />
            </>
          ),
        }),
      ]}
    />
  );
};

export default Editor;
