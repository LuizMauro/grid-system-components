import React from "react";
import { WindowResize } from "../@utils/WindowResize";

interface IProps {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  children?: React.ReactNode;
  style?: React.CSSProperties | undefined;
}

interface IGridColumnStyle {
  gridColumn?: string;
}

const Col: React.FC<IProps> = ({ lg, md, xs, sm, children, ...props }) => {
  const builderColStyles = (value: string | number): IGridColumnStyle => {
    return { gridColumn: `span ${value}` };
  };

  const builderStyle = (minWidth: number) => {
    let style: IGridColumnStyle = {} as IGridColumnStyle;

    if (minWidth > 0) {
      if (minWidth >= 768 && minWidth < 992 && sm) {
        style = builderColStyles(sm);
      } else if (minWidth >= 992 && minWidth < 1200 && md) {
        style = builderColStyles(md);
      } else if (minWidth >= 1200 && lg) {
        style = builderColStyles(lg);
      } else if (xs) {
        style = builderColStyles(xs);
      }
    }

    return style;
  };

  return (
    <div style={{ ...builderStyle(WindowResize()), ...props.style }}>
      {children}
    </div>
  );
};

export { Col };
