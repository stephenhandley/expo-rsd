"use client";

import { ReactNode } from "react";
import { html } from "react-strict-dom";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  style?: any;
}

const superVisibleButton = {
  padding: 4,
  color: 'white',
  backgroundColor: 'green',
  borderRadius: 4,
  borderWidth: 8,
  borderStyle: 'dashed',
  borderColor: '#00ff00',
  fontSize: 20
}

export const Button = ({ children, onClick, style }: ButtonProps) => {
  return (
    <html.button
      style={[superVisibleButton, style]}
      onClick={onClick}
    >
      {children}
    </html.button>
  );
};
