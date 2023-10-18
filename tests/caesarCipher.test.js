import caesarCipher from "../scripts/caesarCipher";

test("Returns alphabet with each letter of the alphabet shifted once", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe(
    "bcdefghijklmnopqrstuvwxyza",
  );
});

test("Returns longer string with each letter of the alphabet shifted once", () => {
  expect(caesarCipher("this is a test", 1)).toBe("uijt jt b uftu");
});

test("Returns alphabet with each letter of the alphabet shifted 5 times", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 5)).toBe(
    "fghijklmnopqrstuvwxyzabcde",
  );
});

test("Returns longer string with each letter of the alphabet shifted 5 times", () => {
  expect(caesarCipher("this is a test", 5)).toBe("ymnx nx f yjxy");
});

test("Returns string shifted with punctuation", () => {
  expect(caesarCipher("Surprise! I am home!", 1)).toBe("Tvsqsjtf! J bn ipnf!");
});

test("Returns string shifted 5 times with punctuation", () => {
  expect(caesarCipher("Surprise! I am home!", 5)).toBe("Xzwuwnxj! N fr mtrj!");
});

test("Returns original string if shift number is 0", () => {
  expect(caesarCipher("Surprise! I am home!", 0)).toBe("Surprise! I am home!");
});

test("Returns error if str is not a valid string", () => {
  expect(caesarCipher(123456, 1)).toBe("Invalid String");
});
