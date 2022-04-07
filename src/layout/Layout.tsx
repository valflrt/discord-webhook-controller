import React, { FC } from "react";

import LayoutStyles from "./Layout.styles";

const Layout: FC = ({ children }) => (
  <LayoutStyles.Layout>{children}</LayoutStyles.Layout>
);

export default Layout;
