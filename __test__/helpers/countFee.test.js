import countFee from "../../helpers/countFee.js";

test("Testing Expected behavior", () => {
  const data = countFee(29000, 0.3);
  expect(data).toEqual("87.00");
});