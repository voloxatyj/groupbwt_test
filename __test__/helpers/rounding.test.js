import rounding from "../../helpers/rounding.js";

test("Testing Expected behavior", () => {
  const data = rounding(0.023);
  expect(data).toEqual(0.03);
});
