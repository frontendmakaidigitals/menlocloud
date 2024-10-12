import React from "react";
import ReactMarkdown from "react-markdown";

const markdownToPlainText = (markdown) => {
  // Ensure markdown is a string
  if (typeof markdown !== "string") {
    return "";
  }

  // Remove markdown syntax
  return markdown
    .replace(/[_*]+/g, "") // Remove emphasis
    .replace(/#+\s+/g, "") // Remove headings
    .replace(/`[^`]+`/g, "") // Remove inline code
    .replace(/\n/g, " ") // Replace newlines with spaces
    .trim(); // Trim leading/trailing whitespace
};

const Marked = ({ markdown, className }) => {
  const plainText = markdownToPlainText(markdown);

  return (
    <div>
      <p className={`line-clamp-3 text-[1rem] text-ellipsis mt-1 ${className}`}>
        {plainText}
      </p>
    </div>
  );
};

export default Marked;
