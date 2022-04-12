import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function Container({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <div className={`${className} container mx-auto`}>{children}</div>;
}
