// add one jest test
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";
import NavBar from "../../components/Navbar";

test("renders nav", () => {
  const { efg } = render(<NavBar />);
  expect(efg()).toMatchSnapshot();
});
