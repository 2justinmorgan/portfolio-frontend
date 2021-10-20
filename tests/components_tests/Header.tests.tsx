import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Header from "../../components/Header/Header";

it("Logo component is used in Header", () => {
  const { getByTestId } = render(<Header />);
  const headerElement = getByTestId("header-testid");

  expect(headerElement.children[0].children[0].children).toHaveLength(2);
  const logoElement =
    headerElement.children[0].children[0].children[1].children[0];
  expect(logoElement).toBe(getByTestId("logo-testid"));
});

it("toggle show nav menu", async () => {
  const { getByTestId } = render(<Header />);
  const burgerMenuButton = getByTestId("burger-testid");
  expect(burgerMenuButton.getAttribute("show-menu")).toBe("visible-false");

  fireEvent.click(burgerMenuButton.children[0]);

  await waitFor(() => {
    expect(burgerMenuButton.getAttribute("show-menu")).toBe("visible-true");
  });
});
