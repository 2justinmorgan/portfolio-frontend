import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import NavMenu from "../../components/NavMenu/NavMenu";

jest.mock("next/link", () => {
  return ({ children }) => children;
});

type GetByTestIdT = (matcher: string) => HTMLElement;

const renderNavMenu = (
  isOpen: boolean,
  toggleOpen: (isOpen: boolean) => void
): GetByTestIdT => {
  const { getByTestId } = render(
    <NavMenu isOpen={isOpen} toggleOpen={toggleOpen} />
  );
  return getByTestId;
};

describe("close NavMenu", () => {
  it("clicking left chevron arrow", async () => {
    let isOpenStateVar = true;
    const isOpen = isOpenStateVar;
    const toggleOpen = () => (isOpenStateVar = !isOpenStateVar);
    const getByTestId = renderNavMenu(isOpen, toggleOpen);
    const closeChevronElement = getByTestId("closechevron-testid");
    expect(isOpenStateVar).toBe(true);

    fireEvent.click(closeChevronElement.children[0]);

    await waitFor(() => {
      expect(isOpenStateVar).toBe(false);
    });
  });

  it('clicking the "Fullstack" site navigation menu button', async () => {
    let isOpenStateVar = true;
    const isOpen = isOpenStateVar;
    const toggleOpen = () => (isOpenStateVar = !isOpenStateVar);
    renderNavMenu(isOpen, toggleOpen);
    expect(isOpenStateVar).toBe(true);

    fireEvent.click(screen.getByText("Fullstack"));

    await waitFor(() => {
      expect(isOpenStateVar).toBe(false);
    });
  });

  it("pressing escape key", async () => {
    let isOpenStateVar = true;
    const isOpen = isOpenStateVar;
    const toggleOpen = () => (isOpenStateVar = !isOpenStateVar);
    const getByTestId = renderNavMenu(isOpen, toggleOpen);
    const navMenuElement = getByTestId("navmenu-testid");
    expect(isOpenStateVar).toBe(true);

    fireEvent.keyDown(navMenuElement, {
      key: "Escape",
      code: "Escape",
      which: 27,
    });

    await waitFor(() => {
      expect(isOpenStateVar).toBe(false);
    });
  });
});
