import { useShoppingCart } from './store';

export function useShoppingCartTotal() {
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);
  return shoppingCart.reduce(
    (prev, curr) => prev + parseFloat(curr.price) * curr.numberOfItems,
    0
  );
}
