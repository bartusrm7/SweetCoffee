export default function Cart({ displayCart }) {
	return (
		<div className={`cart ${displayCart ? "d-flex" : "d-none"}`}>
			<div className='cart__main-container'></div>
		</div>
	);
}
