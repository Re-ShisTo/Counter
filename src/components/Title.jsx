import React from "react";

const Title = () => {
  console.log("Rendering title");

  return <h1>Simple Increament Counter</h1>;
};

export default React.memo(Title);
