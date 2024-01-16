let shop = [
  { id: 1, product: "Beloxxi", quantity: 10, price: "₦100" },
  { id: 2, product: "Malt", quantity: 4, price: "₦500" },
  { id: 3, product: "Tom-Tom", quantity: 15, price: "₦50" },
];

//create Stock Logic

let stock = {
  id: shop.length + 1,
  product: "Sachet-water",
  quantity: 20,
  price: "₦20",
};

export const createStockLogic = (
  data: Array<{ id: number; product: string; quantity: number; price: string }>,
  value: { id: number; product: string; quantity: number; price: string }
): { id: number; product: string; quantity: number; price: string } => {
  data.push(value);

  return value;
};

export const viewAllStocksLogic = (
  data: Array<{ id: number; product: string; quantity: number; price: string }>
): Array<{ id: number; product: string; quantity: number; price: string }> => {
  return data;
};

export const viewOneStockLogic = (
  data: Array<{ id: number; product: string; quantity: number; price: string }>,
  id: number
): { id: number; product: string; quantity: number; price: string } => {
  let getStock = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getStock;
};

export const updateOneStockLogic = (
  data: Array<{ id: number; product: string; quantity: number; price: string }>,
  id: number
): { id: number; product: string; quantity: number; price: string } => {
  let getOneStock = data?.find((el: any) => {
    return el.id === id;
  })!;

  return getOneStock;
};

export const deleteStockLogic = (
  data: Array<{ id: number; product: string; quantity: number; price: string }>,
  id: number
): boolean => {
  const startLength = data.length;
  data = data.filter((student) => student.id !== id);
  return data.length < startLength;
};

createStockLogic(shop, stock);
viewAllStocksLogic(shop);
viewOneStockLogic(shop, 3);
updateOneStockLogic(shop, 4);
deleteStockLogic(shop, 4);
