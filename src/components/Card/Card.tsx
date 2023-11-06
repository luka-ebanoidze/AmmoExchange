import { ReactNode } from "react";

type CardChildren = {
  children: ReactNode;
};

export function Card({ children }: CardChildren) {
  return (<div className="flex w-full justify-evenly py-20">{children}</div>);
}
