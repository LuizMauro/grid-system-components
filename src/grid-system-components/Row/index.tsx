import React from "react";
import "../styles/styles.css";

// import { Container } from './styles';
interface IProps {
  children: React.ReactNode;
  columns?: string | number;
  style?: React.CSSProperties;
  gridGap?: string | number;
}

const Row: React.FC<IProps> = ({ children, columns, style, gridGap }) => {
  const builderStyle = () => {
    let s = {};

    s = {
      ...s,
      ...{
        gridTemplateColumns: `repeat(${columns ? columns : 12}, 1fr)`,
      },
    };

    if (gridGap) {
      s = { ...s, ...{ gridGap: `${gridGap}px` } };
    }

    return s;
  };

  return (
    <div style={{ display: "grid", ...builderStyle(), ...style }}>
      {children}
    </div>
  );
};

export { Row };
