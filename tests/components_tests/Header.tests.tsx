import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "../../components/Header/Header";

it("Logo component is used in Header", () => {
  const { getByTestId } = render(<Header />);
  const headerElement = getByTestId("header-testid");

  expect(headerElement.children[0].children[0].children).toHaveLength(2);
  const logoElement =
    headerElement.children[0].children[0].children[1].children[0];
  expect(logoElement).toBe(getByTestId("logo-testid"));
});
