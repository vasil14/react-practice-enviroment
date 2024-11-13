import { useState } from "react";

const ToggleThemeMode = () => {
  const [theme, setTheme] = useState<string>("dark");
  return <div>ToggleThemeMode</div>;
};

export default ToggleThemeMode;
