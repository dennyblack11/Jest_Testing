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
