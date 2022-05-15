const { mockRobots } = require("../../mocks/robots");
const { getRobots } = require("./robotControllers");

jest.mock("../../db/models/Robot", () => ({
  ...jest.requireActual("../../db/models/Robot"),
  find: jest.fn().mockResolvedValue(mockRobots),
}));

describe("Given a getRobots function", () => {
  describe("When it's invoked with a response", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    test("Then it should call the response status method with a 200", async () => {
      await getRobots(null, res);

      const expectedStatus = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the response json method with a list of Robots", async () => {
      const expectedMock = { robots: mockRobots };

      await getRobots(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedMock);
    });
  });
});
