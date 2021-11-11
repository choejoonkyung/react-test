import { render, screen } from "@testing-library/react";
import Type from "../Type";

test("서버로 부터 상품 이미지를 받아온다.", async () => {
  render(<Type orderType="products" />);

  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map(
    (element) => (element as HTMLImageElement).alt
  );
  expect(altText).toEqual(["America product", "England product"]);
});
