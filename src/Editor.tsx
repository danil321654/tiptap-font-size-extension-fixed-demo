import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";

import "./extensions/ListItemMarker.scss";
import classes from "./editor.module.scss";
import FontSize from "./extensions/FontSize";
import { Buttons } from "./Buttons";
import { ListItemMarker } from "./extensions/ListItemMarker";

const extensions = [StarterKit, FontSize, TextStyle, ListItemMarker];

const content =
  "<ol><li><p><span style>Hello World!</span></p></li><li><p><span style='font-size: 36px;'>Hello World!</span></p></li></ol>";

export const Editor = () => {
  const editor = useEditor({
    extensions,
    content,
  });
  return (
    <div className={classes.wrapper}>
      {editor && <Buttons editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};
