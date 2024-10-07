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

const Editor = ({ onChange, markdown, editorRef }) => {
  console.log(markdown ? markdown : "");
  return (
    <div className="editor-container px-2 min-h-[100px]">
      <MDXEditor
        onChange={onChange}
        markdown={markdown}
        contentEditableClassName="prose"
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
                <BlockTypeSelect />
                <CreateLink />
                <InsertThematicBreak />
              </>
            ),
          }),
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
