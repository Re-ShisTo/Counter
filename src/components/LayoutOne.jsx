import useScreenSizeChecker from "../hooks/useScreenSizeChecker";

const LayoutOne = () => {
  const onSmallScreen = useScreenSizeChecker(768);
  return (
    <div>
      <h1>Screen Size is {onSmallScreen ? "Small" : "Large"}</h1>
    </div>
  );
};

export default LayoutOne;
