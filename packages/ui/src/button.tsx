"use client";

import { ReactNode } from "react";
import { html, css } from "react-strict-dom";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  style?: any;
}

const defaultStyles = css.create({
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
  console.log("defaultStyles.button:", defaultStyles.button);
  console.log("incoming style:", style);
  console.log("combined style array:", [defaultStyles.button, style]);

  return (
    <html.button
      style={[defaultStyles.button, style]}
      onClick={onClick}
    >
      {children}
    </html.button>
  );
}
