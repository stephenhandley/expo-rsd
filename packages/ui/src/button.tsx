"use client";

import { ReactNode } from "react";
import { html, css } from "react-strict-dom";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  style?: any;
}

// Do not name this variable "defaultStyles" 🤯
const defaultStyles_NOPE = css.create({
  button: {
    padding: 4,
    color: 'white',
    backgroundColor: 'green',
    borderRadius: 4,
    borderWidth: 8,
    borderStyle: 'dashed',
    borderColor: '#00ff00',
    fontSize: 20,
  }
});

export function Button({ children, onClick, style = {} }: ButtonProps) {
  console.log("defaults:", defaultStyles_NOPE.button);
  console.log("incoming:", style);
  console.log("combined:", [defaultStyles_NOPE.button, style]);

  return (
    <html.button
      style={[defaultStyles_NOPE.button, style]}
      onClick={onClick}
    >
      {children}
    </html.button>
  );
}
