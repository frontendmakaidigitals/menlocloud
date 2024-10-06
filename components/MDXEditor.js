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
   quotePlugin ,
  headingsPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import "../styles/globals.css"; 

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
        headingsPlugin(),
        quotePlugin ()
      ]}
    />
  );
};

export default Editor;
