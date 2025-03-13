import { type JSX } from "react";
import { html } from "react-strict-dom";

export function Code({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: any;
}): JSX.Element {
  return <html.code style={style}>{children}</html.code>;
}
