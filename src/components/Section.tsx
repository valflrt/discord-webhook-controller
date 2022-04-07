import React, { FC } from "react";

import SectionStyles from "./Section.styles";

let Section: FC = ({ children }) => {
  return <SectionStyles.Section tabIndex={0}>{children}</SectionStyles.Section>;
};

export default Section;
