const { sum, square } = require("./index");

describe("Should contain tests for sum", () => {
  it("should add 2 numbers", () => {
    //Arrange
    const a = 4;
    const b = 6;
    const expectedResult = 10;
    //Act
    const actual = sum(a, b);
    //Assert
    expect(actual).toBe(expectedResult);
  });
  it("should return an error for invalid input", () => {
    //Arrange
    const a = null;
    const b = 6;
    const expectedResult = "Invalid Input";
    //Act
    const actual = sum(a, b);
    //Assert
    expect(actual).toBe(expectedResult);
  });
});
//^ passing in a code you wouldn't expect---breaks code
describe("should contain tests for square", () => {
  it("should square a number", () => {
    //Arrange
    const num = 8;
    const expectedResult = 64;

    //Act
    const actual = square(num);

    //Assert
    expect(actual).toBe(expectedResult);
  });

  it("should return an error for invalid input", () => {
    //Arrange
    const num = null;
    const expectedResult = "Invalid Input";

    //Act
    const actual = square(num);

    //Assert
    expect(actual).toBe(expectedResult);
  });
});
describe("should contain test for cube", () => {
  it("should cube a number", () => {
    //Arrange
    const num = 3;
    const expectedResult = 27;
    //Act
    const actual = cube(num);

    //Assert
    expect(actual).toBe(expectedResult);
  });
});
it("should return an error for invalid input", () => {
  //Arrange
  const num = null;
  const expectedResult = "Invalid Input";

  //Act
  const actual = cube(num);

  //Assert
  expect(actual).toBe(expectedResult);
});
