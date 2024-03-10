import { shops } from "./shops";

export const products = [];
shops.forEach((shop) => products.push(...shop.products));
