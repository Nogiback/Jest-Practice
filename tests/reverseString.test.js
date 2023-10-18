import reverseString from "../scripts/reverseString";

test("Returns a string in reverse, 1 word", () => {
  expect(reverseString("Nogiback")).toBe("kcabigoN");
});

test("Returns a string in reverse, multiple word", () => {
  expect(reverseString("Nogiback is my name")).toBe("eman ym si kcabigoN");
});
