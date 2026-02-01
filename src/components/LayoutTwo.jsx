import useScreenSizeChecker from "../hooks/useScreenSizeChecker";

const LayoutTwo = () => {
  const onSmallScreen = useScreenSizeChecker(868);
  return (
    <div>
      <h1>Screen Size is {onSmallScreen ? "Small" : "Large"}</h1>
    </div>
  );
};

export default LayoutTwo;
