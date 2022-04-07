import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <p>There's nothing here !</p>
    <Link to={"/"}>Back home</Link>
  </>
);

export default NotFound;
