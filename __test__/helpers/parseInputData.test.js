import parseInputData from "../../helpers/parseInputData.js";
import config from "../../config/config.js";

const path = "./input.test.json";

test("Testing parseData fails with an error", async () => {
  const error = await parseInputData();
  expect(error).toMatchObject(error);
});


test("Testing Promise With Return Data", async () => {
  expect(config.path).toEqual("./input.json");
  const data = await parseInputData(path);
  expect(data).toMatchObject(data);
});
