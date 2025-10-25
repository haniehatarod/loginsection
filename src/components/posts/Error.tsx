import type { ReactNode } from "react";

export default function Error({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen justify-between flex items-center ">
      <div className="text-red-500">{children}</div>
    </div>
  );
}
