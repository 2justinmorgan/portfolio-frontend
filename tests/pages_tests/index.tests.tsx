import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Home from "../../pages/index";

it("header, main and footer elements are in the home page", () => {
  const { getByTestId } = render(<Home />);
  const homeElement = getByTestId("home-testid");

  expect(homeElement.children).toHaveLength(3);
  expect(homeElement.children[0]).toBe(getByTestId("header-testid"));
  expect(homeElement.children[1]).toBe(getByTestId("main-testid"));
  expect(homeElement.children[2]).toBe(getByTestId("footer-testid"));
});
