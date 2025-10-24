import type { Label } from "../../types/label";

export default function Label({ children, className }:Label) {
  return <label className={`${className}`}>{children}</label>;
}
