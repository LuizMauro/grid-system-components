import React from "react";

const WindowResize = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useLayoutEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return windowWidth;
};

export { WindowResize };
