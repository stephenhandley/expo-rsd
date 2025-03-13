import { type JSX } from "react";
import { html } from "react-strict-dom";

export function Card({
  style,
  title,
  children,
  href,
}: {
  style?: any;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <html.a
      style={style}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <html.h2>
        {title} <html.span>-&gt;</html.span>
      </html.h2>
      <html.p>{children}</html.p>
    </html.a>
  );
}
