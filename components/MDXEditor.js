"use client";

import {
  MDXEditor,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  ListsToggle,
  CreateLink,
  InsertThematicBreak,
  UndoRedo,
  linkDialogPlugin,
  listsPlugin,
  BlockTypeSelect,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { on } from "events";

const Editor = ({ onChange, markdown, editorRef }) => {
  return (
    <MDXEditor
      onChange={onChange}
      markdown={markdown}
      contentEditableClassName="prose"
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <CreateLink />
              <InsertThematicBreak />
              <UndoRedo />
              <BlockTypeSelect />
            </>
          ),
        }),
        linkDialogPlugin(),
        listsPlugin(),
      ]}
    />
  );
};

export default Editor;
