import { render, screen } from "@testing-library/react";
import Counter from ".";

test("the counter starts at 0", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");
});
