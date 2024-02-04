import { FC, useState } from "react";

interface ITestProps {
  value: string;
}

export const Test: FC<ITestProps> = ({ value }) => {
  const [today, setToday] = useState<string>(value);

  return <div>Test</div>;
};
