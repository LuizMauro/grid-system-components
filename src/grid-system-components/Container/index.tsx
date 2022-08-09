import React from "react";
import "../styles/styles.css";

interface IProps {
  children: React.ReactNode;
  fluid?: boolean;
  style?: React.CSSProperties;
}

const Container: React.FC<IProps> = ({ children, fluid, style }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const getWidth = (minWidth: number) => {
    if (fluid) {
      return "100%";
    }

    if (minWidth >= 768 && minWidth < 992) {
      return "750px";
    } else if (minWidth >= 992 && minWidth < 1200) {
      return "970px";
    } else if (minWidth >= 1200 && minWidth < 1400) {
      return "1170px";
    } else if (minWidth >= 1400) {
      return "1320px";
    }
  };

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <div
      style={{
        width: getWidth(windowWidth),
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 15,
        paddingRight: 15,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export { Container };
