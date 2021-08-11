import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  act,
  waitForElement,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Clickers from "./Clickers";

afterEach(cleanup);

it("displays the count", () => {
  const { getByTestId } = render(<Clickers />);
  expect(getByTestId("count")).toHaveTextContent("0");
});

it("increments count", () => {
  const { getByTestId, getByText } = render(<Clickers />);
  fireEvent.click(getByText("Up"));
  expect(getByTestId("count")).toHaveTextContent("1");
});

// this test is modified because of deprecation of waitForElement
// it("decrements count ", () => {
//   const { getByText, getByTestId } = render(<Clickers />);
//   fireEvent.click(getByText("Down"));
//   expect(getByTestId("count")).toHaveTextContent("-1");
// });

it("decrements count delayed", async () => {
  act(async () => {
    const { getByText } = render(<Clickers />);
    fireEvent.click(getByText("Down"));

    const countSpan = await waitForElement(() => getByText("-1"));
    expect(countSpan).toHaveTextContent("-1");
  });
});
