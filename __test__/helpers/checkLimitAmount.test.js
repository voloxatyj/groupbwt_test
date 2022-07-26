import checkLimitAmount from "../../helpers/checkLimitAmount.js";

describe("Check behavior of limit and amount", () => {
  it("Check when amount is greater then limit", () => {
    const result = checkLimitAmount(1500, 1000);
    expect(result).toEqual(
      expect.objectContaining({
        limit: 0,
        rest_of_amount: 500
      }));
  });

  it("Check when amount is less then limit", () => {
    const result = checkLimitAmount(700, 1000);
    expect(result).toEqual(
      expect.objectContaining({
        limit: 300,
        rest_of_amount: 0
      }));
  });

  it("Check when limit equal zero", () => {
    const result = checkLimitAmount(700, 0);
    expect(result).toEqual(
      expect.objectContaining({
        limit: 0,
        rest_of_amount: 700
      }));
  });
});