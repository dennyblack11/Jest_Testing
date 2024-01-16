import { createTodo, viewAlltodo, viewOneTodo, updateOneTodo } from "..";

describe("checking all todo List Logic", () => {
  test("check our create todo Logic", () => {
    let data = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 100),
        task: Math.ceil(Math.random() * 1000).toString(),
        completed: false,
      };
    });

    let value = {
      id: Math.floor(Math.random() * 100),
      task: Math.ceil(Math.random() * 1000).toString(),
      completed: Math.random() < 0.5,
    };

    expect(createTodo(data, value)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          task: expect.any(String),
          completed: expect.any(Boolean),
        },
      ])
    );
  });

  test("view All todo Logic", () => {
    let data = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 100),
        task: Math.ceil(Math.random() * 1000).toString(),
        completed: false,
      };
    });

    expect(viewAlltodo(data)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          task: expect.any(String),
          completed: expect.any(Boolean),
        },
      ])
    );
  });

  test("view One Todo logic", () => {
    let count = 0;
    let data = Array.from({ length: 6 }, () => {
      count++;
      return {
        id: count,
        task: Math.ceil(Math.random() * 1000).toString(),
        completed: false,
      };
    });

    expect(viewOneTodo(data, 1)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          task: expect.any(String),
          completed: expect.any(Boolean),
        },
      ])
    );
  });

  // test("check our update one todo List", () => {
  //   let count = 0;
  //   let data = Array.from(todos, () => {
  //     count++;

  //     return {
  //       id: count,
  //       task: Math.floor(Math.random() * 1000).toString(),
  //       completed: true,
  //     };
  //   });

  //   expect(updateOneTodo(data, 1)).toEqual({
  //     id: expect.any(Number),
  //     task: expect.any(String),
  //     completed: expect.any(Boolean),
  //   });
  // });
});
