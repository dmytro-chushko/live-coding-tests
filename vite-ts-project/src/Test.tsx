import { FC, useEffect, useRef, useState } from "react";

interface ITestProps {
  value: string;
}

export const Test: FC<ITestProps> = ({ value }) => {
  const [today, setToday] = useState<string>(value);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, [third]);

  return <div ref={containerRef}>Test</div>;
};
