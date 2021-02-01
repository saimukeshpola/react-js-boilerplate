import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders learn react link", () => {
  const onClick = jest.fn();
  render(<Button label="Hello" onClick={onClick} />);
  const buttonElement = screen.getByText(/Hello/i);
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  expect(onClick).toBeCalledTimes(1);
});
