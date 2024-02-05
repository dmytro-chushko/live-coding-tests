import { FC, useRef, useState } from "react";

interface ITestProps {
  value: string;
}

export const Test: FC<ITestProps> = ({ value }) => {
  const [today, setToday] = useState<string>(value);
  const containerRef = useRef<HTMLDivElement>(null);

  return <div>Test</div>;
};