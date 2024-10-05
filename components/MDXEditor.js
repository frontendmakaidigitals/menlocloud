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
  InsertFrontmatter,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

const Editor = ({ onChange, markdown, editorRef }) => {
  console.log(markdown ? markdown : "");
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
              <BlockTypeSelect />
              <CreateLink />
              <InsertThematicBreak />
              <UndoRedo />
            </>
          ),
        }),
        linkDialogPlugin(),
        listsPlugin(),
        thematicBreakPlugin(),
      ]}
    />
  );
};

export default Editor;
