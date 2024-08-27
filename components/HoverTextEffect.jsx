import React from "react";

export const HoverTextEffect = ({ text }) => {
  const p = text;

  return (
    <p className="text-2xl font-semibold">
      {text.split("").map((letter, index) => {
        // Check for line breaks and spaces
        if (letter === " ") {
          return (
            <span key={index} className="inline-block mr-2">
              {"\u00A0"}
            </span>
          ); // non-breaking space
        } else if (letter === "\n") {
          return <br key={index} />; // Line break
        } else {
          return (
            <span
              key={index}
              className="inline-block transition duration-300 ease-in-out transform hover:text-pink-500 hover:scale-125">
              {letter}
            </span>
          );
        }
      })}
    </p>
  );
};
