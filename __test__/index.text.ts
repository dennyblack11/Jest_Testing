import {
  createAttendanceLogic,
  updateOneAttendanceLogic,
  viewAllAttendanceLogic,
  viewOneAttendanceLogic,
  //   updateOneStockLogic,
  //   viewAllStocksLogic,
  //   viewOneStockLogic,
} from "..";

describe("checking index logic", () => {
  test("checking create stock logic", () => {
    let data = Array.from({ length: 6 }, () => {
      return {
        studentID: Math.floor(Math.random() * 10),
        name: Math.floor(Math.random() * 20).toString(),
        status: Math.floor(Math.random() * 20).toString(),
      };
    });

    let value = {
      studentID: Math.floor(Math.random() * 10),
      name: Math.floor(Math.random() * 20).toString(),
      status: Math.floor(Math.random() * 20).toString(),
    };

    expect(createAttendanceLogic(data, value)).toEqual(
      expect.objectContaining({
        studentID: expect.any(Number),
        name: expect.any(String),
        status: expect.any(String),
      })
    );
  });

  test("checking view All Attendance logic", () => {
    let data = Array.from({ length: 6 }, () => {
      return {
        studentID: Math.floor(Math.random() * 10),
        name: Math.floor(Math.random() * 20).toString(),
        status: Math.floor(Math.random() * 20).toString(),
      };
    });

    let value = {
      studentID: Math.floor(Math.random() * 10),
      name: Math.floor(Math.random() * 20).toString(),
      status: Math.floor(Math.random() * 20).toString(),
    };

    expect(viewAllAttendanceLogic(data)).toEqual(
      expect.arrayContaining([
        {
          studentID: expect.any(Number),
          name: expect.any(String),
          status: expect.any(String),
        },
      ])
    );
  });

  test("checking view One Attendance logic", () => {
    let count = 0;
    let data = Array.from({ length: 6 }, () => {
      count++;
      return {
        studentID: count,
        name: Math.floor(Math.random() * 20).toString(),
        status: Math.floor(Math.random() * 20).toString(),
      };
    });

    expect(viewOneAttendanceLogic(data, 1)).toEqual(
      expect.arrayContaining([
        {
          studentID: expect.any(Number),
          name: expect.any(String),
          status: expect.any(String),
        },
      ])
    );
  });

  test("checking update One Attendance logic", () => {
    let count = 0;
    let data = Array.from({ length: 6 }, () => {
      count++;
      return {
        studentID: count,
        name: Math.floor(Math.random() * 20).toString(),
        status: Math.floor(Math.random() * 20).toString(),
      };
    });

    expect(updateOneAttendanceLogic(data, 1)).toEqual(
      expect.arrayContaining([
        {
          studentID: expect.any(Number),
          name: expect.any(String),
          status: expect.any(String),
        },
      ])
    );
  });
});
