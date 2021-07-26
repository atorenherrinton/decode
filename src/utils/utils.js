export const convertToArray = (object) => Object.entries(object);

export const convertToObject = (array) =>
  Object.assign(...array.map(([k, v]) => ({ [k]: v })));

export const countCharacters = (text) => {
  const count = {};
  [...text.replace(/\s/g, "")].forEach((char) => {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  });
  return count;
};

export const findHighest = (array) =>
  array.sort((a, b) => b[1] - a[1]).slice(0, 5);
