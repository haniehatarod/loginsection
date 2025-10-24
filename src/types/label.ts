import type { ReactNode } from "react";

export type Label = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
  className?: string;
};
