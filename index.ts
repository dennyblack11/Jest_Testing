// let shop = [
//   { id: 1, product: "Beloxxi", quantity: 10, price: "₦100" },
//   { id: 2, product: "Malt", quantity: 4, price: "₦500" },
//   { id: 3, product: "Tom-Tom", quantity: 15, price: "₦50" },
// ];

// //create Stock Logic

// let stock = {
//   id: shop.length + 1,
//   product: "Sachet-water",
//   quantity: 20,
//   price: "₦20",
// };

// export const createStockLogic = (
//   data: Array<{ id: number; product: string; quantity: number; price: string }>,
//   value: { id: number; product: string; quantity: number; price: string }
// ): { id: number; product: string; quantity: number; price: string } => {
//   data.push(value);

//   return value;
// };

// export const viewAllStocksLogic = (
//   data: Array<{ id: number; product: string; quantity: number; price: string }>
// ): Array<{ id: number; product: string; quantity: number; price: string }> => {
//   return data;
// };

// export const viewOneStockLogic = (
//   data: Array<{ id: number; product: string; quantity: number; price: string }>,
//   id: number
// ): { id: number; product: string; quantity: number; price: string } => {
//   let getStock = data?.find((el: any) => {
//     return el.id === id;
//   })!;

//   return getStock;
// };

// export const updateOneStockLogic = (
//   data: Array<{ id: number; product: string; quantity: number; price: string }>,
//   id: number
// ): { id: number; product: string; quantity: number; price: string } => {
//   let getOneStock = data?.find((el: any) => {
//     return el.id === id;
//   })!;

//   return getOneStock;
// };

// export const deleteStockLogic = (
//   data: Array<{ id: number; product: string; quantity: number; price: string }>,
//   id: number
// ): boolean => {
//   const startLength = data.length;
//   data = data.filter((student) => student.id !== id);
//   return data.length < startLength;
// };

// createStockLogic(shop, stock);
// viewAllStocksLogic(shop);
// viewOneStockLogic(shop, 3);
// updateOneStockLogic(shop, 4);
// deleteStockLogic(shop, 4);

const todos = [
  { id: 1, task: "Sweep House", completed: true },
  { id: 2, task: "Fetch Water", completed: false },
  { id: 3, task: "Mob House", completed: true },
  { id: 4, task: "Wash Clothes", completed: false },
  { id: 5, task: "Iron Dresses", completed: true },
  { id: 6, task: "Bath Siblings", completed: false },
  { id: 7, task: "Arrage clothes", completed: true },
];

let addTodo = {
  id: todos.length + 1,
  task: "Play Games",
  completed: false,
};

export const createTodo = (
  todoList: Array<{ id: number; task: string; completed: boolean }>,
  newTodo: { id: number; task: string; completed: boolean }
): { id: number; task: string; completed: boolean } => {
  todoList.push(newTodo);

  return newTodo;
};

export const viewAlltodo = (
  todoList: Array<{ id: number; task: string; completed: boolean }>
): Array<{ id: number; task: string; completed: boolean }> => {
  return todoList;
};

export const viewOneTodo = (
  todoList: Array<{ id: number; task: string; completed: boolean }>,
  id: number
): { id: number; task: string; completed: boolean } => {
  let getTodo = todoList.find((el: any) => {
    return el.id === id;
  })!;

  return getTodo;
};

export const updateOneTodo = (
  data: Array<{ id: number; task: string; completed: boolean }>,
  id: number
): { id: number; task: string; completed: boolean } => {
  let getTodo = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getTodo;
};

export const deleteTodo = (
  todoList: Array<{ id: number; task: string; completed: boolean }>,
  id: number
): boolean => {
  const initialLength = todoList.length;
  todoList = todoList.filter((todoList) => todoList.id !== id);
  return todoList.length < initialLength;
};

createTodo(todos, addTodo);
viewAlltodo(todos);
viewOneTodo(todos, 4);
updateOneTodo(todos, 4);
console.log(deleteTodo(todos, 6));
console.log(viewAlltodo(todos));
