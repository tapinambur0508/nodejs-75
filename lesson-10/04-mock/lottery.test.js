const lottery = require("./lottery");

const mockGenerateNumber = jest.fn();

jest.mock("./generateNumber", () => {
  return () => mockGenerateNumber();
});

describe("lottery", () => {
  beforeAll(() => {
    mockGenerateNumber.mockImplementation(() => 2);
  });

  test("should won when 2", () => {
    const result = lottery(2);
    expect(result).toBe("$$$ You win! $$$");
  });

  test("should lose when 1", () => {
    const result = lottery(1);
    expect(result).toBe("You lost:(");
  });
});
