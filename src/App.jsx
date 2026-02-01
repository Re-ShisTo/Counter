import { useCallback, useMemo, useState } from "react";
import Title from "./components/Title";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";
import LayoutOne from "./components/LayoutOne";
import LayoutTwo from "./components/LayoutTwo";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increamentByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  const increamentByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEven = useMemo(() => {
    // fake epensive operation
    // It will load for a while to decrease the load time uyou can remove on zero in the while loop.
    let i = 0;
    while (i <= 1000000000) {
      i++;
    }

    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div className="app">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={increamentByOne}>Increament By One</Button>
      {isEven ? <p>Even</p> : <p>Odd</p>}
      <hr />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={increamentByFive}>Increament By Five</Button>
      <hr />
      {/* Custom Hooks */}
      <hr />
      <LayoutOne />
      <LayoutTwo />
    </div>
  );
};

export default App;
