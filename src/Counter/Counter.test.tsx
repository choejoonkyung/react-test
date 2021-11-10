import { fireEvent, render, screen } from "@testing-library/react";
import Counter from ".";

// test("the counter starts at 0", () => {
//   render(<Counter />);
//   const counterElement = screen.getByTestId("counter");
//   expect(counterElement).toHaveTextContent("0");
// });
//
// test("minus button has correct text", () => {
//   render(<Counter />);
//   const buttonElement = screen.getByTestId("minus-button");
//   expect(buttonElement).toHaveTextContent("-");
// });
//
// test("plus button has correct text", () => {
//   render(<Counter />);
//   const buttonElement = screen.getByTestId("plus-button");
//   expect(buttonElement).toHaveTextContent("+");
// });
//
// test("+ 버튼을 눌렀을 때, 카운터가 1로 변경 된다.", () => {
//   render(<Counter />);
//   const buttonElement = screen.getByTestId("plus-button");
//   fireEvent.click(buttonElement);
//   const counterElement = screen.getByTestId("counter");
//   expect(counterElement).toHaveTextContent("1");
// });
//
// test("- 버튼을 눌렀을 때, 카운터가 -1로 변경 된다.", () => {
//   render(<Counter />);
//   const buttonElement = screen.getByTestId("minus-button");
//   fireEvent.click(buttonElement);
//   const counterElement = screen.getByTestId("counter");
//   expect(counterElement).toHaveTextContent("-1");
// });
