function analyzeArray(arr) {
  for (let value of arr) {
    if (typeof value !== "number") {
      return "Invalid array. Must only contain numbers.";
    }
  }
  const object = {
    average: getAverage(arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return object;
}

function getAverage(arr) {
  let total = 0;
  let count = 0;

  arr.forEach((value) => {
    total += value;
    count++;
  });

  return total / count;
}

export default analyzeArray;
