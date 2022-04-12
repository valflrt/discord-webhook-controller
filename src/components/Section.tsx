import React, { FC, HTMLProps } from "react";

let Section: FC<HTMLProps<HTMLTableSectionElement>> = ({
  children,
  tabIndex = 0,
}) => {
  return <section tabIndex={tabIndex}>{children}</section>;
};

export default Section;
