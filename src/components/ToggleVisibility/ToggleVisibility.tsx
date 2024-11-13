import { Button } from "antd";
import { useState } from "react";

const ToggleVisibility = () => {
  const [visibility, setVisibility] = useState(false);

  const Togle = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <>
      <Button type="primary" onClick={Togle}>
        {visibility ? "Hide" : "Show"}
      </Button>
      {visibility && <h1 style={{ color: "white" }}>Hello World</h1>}
    </>
  );
};

export default ToggleVisibility;
