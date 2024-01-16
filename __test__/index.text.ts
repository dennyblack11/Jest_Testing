import {
  createStockLogic,
  deleteStockLogic,
  updateOneStockLogic,
  viewAllStocksLogic,
  viewOneStockLogic,
} from "..";

describe("checking index logic", () => {
  test("checking create stock logic", () => {
    let data = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 10),
        product: Math.floor(Math.random() * 20).toString(),
        quantity: Math.floor(Math.random() * 20),
        price: Math.floor(Math.random() * 20).toString(),
      };
    });

    let value = {
      id: Math.floor(Math.random() * 10),
      product: Math.floor(Math.random() * 20).toString(),
      quantity: Math.floor(Math.random() * 20),
      price: Math.floor(Math.random() * 20).toString(),
    };

    expect(createStockLogic(data, value)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        product: expect.any(String),
        quantity: expect.any(Number),
        price: expect.any(String),
      })
    );
  });

  test("checking view All Stock logic", () => {
    let data = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 10),
        product: Math.floor(Math.random() * 20).toString(),
        quantity: Math.floor(Math.random() * 20),
        price: Math.floor(Math.random() * 20).toString(),
      };
    });

    let value = {
      id: Math.floor(Math.random() * 10),
      product: Math.floor(Math.random() * 20).toString(),
      quantity: Math.floor(Math.random() * 20),
      price: Math.floor(Math.random() * 20).toString(),
    };

    expect(viewAllStocksLogic(data)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          product: expect.any(String),
          quantity: expect.any(Number),
          price: expect.any(String),
        },
      ])
    );
  });

  test("checking view One Stock logic", () => {
    let count = 0;
    let data = Array.from({ length: 6 }, () => {
      count++;
      return {
        id: count,
        product: Math.floor(Math.random() * 20).toString(),
        quantity: Math.floor(Math.random() * 20),
        price: Math.floor(Math.random() * 20).toString(),
      };
    });

    expect(viewOneStockLogic(data, 1)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          product: expect.any(String),
          quantity: expect.any(Number),
          price: expect.any(String),
        },
      ])
    );
  });

  test("checking update One Stock logic", () => {
    let count = 0;
    let data = Array.from({ length: 6 }, () => {
      count++;
      return {
        id: count,
        product: Math.floor(Math.random() * 20).toString(),
        quantity: Math.floor(Math.random() * 20),
        price: Math.floor(Math.random() * 20).toString(),
      };
    });

    expect(updateOneStockLogic(data, 1)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          product: expect.any(String),
          quantity: expect.any(Number),
          price: expect.any(String),
        },
      ])
    );
  });

  test("checking delete Stock logic", () => {
    let count = 1;
    let data = Array.from({ length: 6 }, () => {
      count--;
      return {
        id: count,
        product: Math.floor(Math.random() * 20).toString(),
        quantity: Math.floor(Math.random() * 20),
        price: Math.floor(Math.random() * 20).toString(),
      };
    });

    expect(deleteStockLogic(data, 1)).toContainEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          product: expect.any(String),
          quantity: expect.any(Number),
          price: expect.any(String),
        },
      ])
    );
  });
});
