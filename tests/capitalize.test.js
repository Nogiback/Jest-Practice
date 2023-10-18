import capitalize from "../scripts/capitalize";

test("Returns string with first letter capitalized", () => {
  expect(capitalize("nogiback")).toBe("Nogiback");
});

test("Returns string with first letter capitalized, with spaces", () => {
  expect(capitalize("nogiback is my name")).toBe("Nogiback is my name");
});
