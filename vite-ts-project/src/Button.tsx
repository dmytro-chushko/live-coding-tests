import { FC, memo } from "react";

interface IButtonProps {
  increment: () => void;
}

export const Button: FC<IButtonProps> = memo(({ increment }) => {
  console.log("Button update");

  return <button onClick={increment}>press for count</button>;
});
