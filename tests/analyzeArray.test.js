import analyzeArray from "../scripts/analyzeArray";

test("Returns an object with the following properties: average, min, max, and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Returns an object with the following properties: average, min, max, and length", () => {
  expect(analyzeArray([8, 7, 9, 11, 23, 6, 2, 14])).toEqual({
    average: 10,
    min: 2,
    max: 23,
    length: 8,
  });
});

test("Returns error message if array does not contain a number", () => {
  expect(analyzeArray([1, 2, 3, "four", 5])).toEqual(
    "Invalid array. Must only contain numbers.",
  );
});
