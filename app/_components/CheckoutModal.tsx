import { LegacyRef } from 'react';
import { ShoppingCartItem } from '../_types/shoppingCartItem';
import { useShoppingCart } from '../_store';

interface CheckoutModalProps {
  modalRef: LegacyRef<HTMLDialogElement>;
}

export default function CheckoutModal(props: CheckoutModalProps) {
  const { modalRef } = props;

  const shoppingCartItems = useShoppingCart((state) => state.shoppingCart);

  return (
    <dialog ref={modalRef} id='checkout_modal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg text-center'>Shopping Cart</h3>
        {shoppingCartItems.map((shoppingCartItem, index) => (
          <div key={index} className='py-1 flex justify-between'>
            <input
              type='number'
              className='shrink w-10 border-2 text-center'
              defaultValue={shoppingCartItem.numberOfItems}
            />{' '}
            <span>{shoppingCartItem.name}</span>
            <span>@{shoppingCartItem.price}</span>
            <span>{shoppingCartItem.price}</span>
          </div>
        ))}
        <div className='modal-action'>
          <form method='dialog'>
            <button className='btn'>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
