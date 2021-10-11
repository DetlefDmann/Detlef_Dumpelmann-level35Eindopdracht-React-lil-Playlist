import React from "react";
import { render } from "@testing-library/react";
import { describe } from "@jest/globals";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

describe("Test if items are being rendered", () => {
  test("renders element with Text: My Favorite Songs", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/My Favorite Songs/i)).toBeInTheDocument();
  });
  test("renders element with Text: Sort songs by", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Sort songs by/i)).toBeInTheDocument();
  });
  test("renders element with Text: Detlef Dumpelmann", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Detlef Dumpelmann/i)).toBeInTheDocument();
  });
  test("[about Page] renders element with Text: About this songlist:", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App path="/about" />
      </Provider>
    );
    const aboutLink = document.querySelector("#about");
    aboutLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(getByText(/About this songlist:/i)).toBeInTheDocument();
  });
});
