import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

afterEach(cleanup);

it("renders", () => {
  /* render retruns as some other functions specified to the compenent that we are testing */
  /* asFragment is a chunck of what this component rendered */
  const { asFragment } = render(<Header text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});

it("inserts text in h1", () => {
  const { getByTestId, getByText } = render(<Header text="Hello!" />);

  expect(getByTestId("h1tag")).toHaveTextContent("Hello!");
  expect(getByText("Hello!")).toHaveClass("fancy-h1");
});
