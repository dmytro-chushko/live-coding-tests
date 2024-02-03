import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./Button";

type CustomResponse<T> = {
  data: T;
};

type BasicTypes = {
  number: number;
  string: string;
  object: object;
};

const customFetch = new Promise<CustomResponse<string>>((resolve) => {
  setTimeout(() => resolve({ data: "Hello Vite" }), 2000);
});

const useCustomeFetchQuery = <T extends BasicTypes[keyof BasicTypes]>(
  customFetch: Promise<CustomResponse<T>>
): [CustomResponse<T> | undefined, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<CustomResponse<T>>();

  useEffect(() => {
    setIsLoading(true);

    customFetch.then((res) => {
      setResult(res);
      setIsLoading(false);
    });
  }, [customFetch]);

  return [result, isLoading];
};

function App() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState<string>("");
  const [result, isLoading] = useCustomeFetchQuery<string>(customFetch);

  // const handleCount = () => setCount((count) => count + 1);

  const handleCount = useCallback(() => setCount((count) => count + 1), []);

  console.log("App update");

  useEffect(() => {
    if (result) {
      setGreeting(result.data);
    }
  }, [result]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{isLoading ? "...Loading" : greeting}</p>
      <div className="card">
        <Button increment={handleCount} />
        <p>count is {count}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
