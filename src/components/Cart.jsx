import { Button } from "react-bootstrap";
import { useCartContext } from "./CartContext";

export default function Cart({ displayCart }) {
	const { cartArrayData, setCartArrayData } = useCartContext();

	const sumOfPrice = cartArrayData.reduce((sum, item) => sum + item.price, 0);

	const handleRemoveProductFromCart = cartProductName => {
		setCartArrayData(prevState => prevState.filter(item => item.coffee !== cartProductName));
	};

	return (
		<div className={`cart ${displayCart ? "d-flex" : "d-none"}`}>
			{cartArrayData.length === 0 ? (
				<div className='cart__main-container p-3 d-flex flex-column justify-content-between'>Koszyk pusty</div>
			) : (
				<div className='cart__main-container p-3 d-flex flex-column justify-content-between'>
					<div>
						<span className='fw-bold'>Zamówienie:</span>
						{cartArrayData.map((item, index) => (
							<div key={index} className='d-flex justify-content-between my-1'>
								<span>
									{item.coffee} x{item.amount}
								</span>
								<Button className='cart__remove-btn p-0 px-2' onClick={() => handleRemoveProductFromCart(item.coffee)}>
									-
								</Button>
							</div>
						))}
					</div>
					<div className='mt-3'>
						<span className='fw-bold'>Kwota: </span>
						{sumOfPrice}zł
					</div>
				</div>
			)}
		</div>
	);
}
