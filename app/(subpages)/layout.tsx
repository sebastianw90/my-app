import { PATHS } from "@/constants";
import { ReactNode } from "react";

export default function SubpagesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <a href={PATHS.HOME}>Back to home page</a>
      {children}
    </>
  );
}
