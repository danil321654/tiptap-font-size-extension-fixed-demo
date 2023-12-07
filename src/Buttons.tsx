import { Editor } from "@tiptap/core";
import { FC } from "react";

interface ButtonsProps {
  editor: Editor;
}

const fontSizes = [8, 10, 12, 14, 18, 24, 32, 72];

export const Buttons: FC<ButtonsProps> = ({ editor }) => {
  return (
    <div>
      {fontSizes.map((fontSize) => (
        <button
          id={String(fontSize)}
          onClick={() => editor.commands.setFontSize(`${fontSize}px`)}
        >
          {fontSize}
        </button>
      ))}
    </div>
  );
};
