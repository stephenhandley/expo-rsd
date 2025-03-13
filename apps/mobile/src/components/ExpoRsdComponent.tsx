"use client";

import { ReactNode } from "react";
import { html, css } from "react-strict-dom";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  style?: any;
}

const styles = css.create({
  div: {
    padding: 10,
    color: 'white',
    backgroundColor: 'orange'
  }
});

export function ExpoRsdComponent({ children, style = {}}: ButtonProps) {

  return (
    <html.div
      style={[styles.div, style]}
    >
      {children}
    </html.div>
  );
}
