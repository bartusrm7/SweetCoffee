import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import coffeeLogo from "../assets/coffee-cup-logo.svg";
import Cart from "./Cart";
import { useCartContext } from "./CartContext";

export default function Navigation() {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	const [isOpenedCart, setIsOpenedCart] = useState(false);
	const { cartArrayData } = useCartContext();

	const allAmounts = cartArrayData.reduce((sum, item) => sum + item.amount, 0);

	const handleMenuOpen = () => {
		setIsMenuOpened(!isMenuOpened);
	};

	const handleOpenCart = () => {
		setIsOpenedCart(!isOpenedCart);
	};

	useEffect(() => {
		if (isMenuOpened) {
			setIsOpenedCart(false);
		}
	}, [isMenuOpened]);

	useEffect(() => {
		if (isOpenedCart) {
			setIsMenuOpened(false);
		}
	}, [isOpenedCart]);

	return (
		<nav className='nav fixed-top pt-2 pb-2'>
			<Container>
				<div className='d-flex justify-content-between align-items-center'>
					<div className='nav__logo-container d-flex align-items-center'>
						<h2 className='m-0'>SweetCoffee</h2>
						<img className='nav__logo-img ms-1 fs-2' src={coffeeLogo} alt='Coffee Logo' title='Coffee Logo' />
					</div>

					<ul className='nav__menu d-lg-flex flex-column flex-lg-row justify-content-between align-items-center p-0 m-0' style={{ display: isMenuOpened ? "flex" : "none" }}>
						<li className='nav__menu-item'>
							<a className='p-3' onClick={() => setIsMenuOpened(false)} href='#strona-główna'>
								Strona główna
							</a>
						</li>
						<li className='nav__menu-item'>
							<a className='p-3' onClick={() => setIsMenuOpened(false)} href='#o-nas'>
								O nas
							</a>
						</li>
						<li className='nav__menu-item'>
							<a className='p-3' onClick={() => setIsMenuOpened(false)} href='#proces-kawy'>
								Proces kawy
							</a>
						</li>
						<li className='nav__menu-item'>
							<a className='p-3' onClick={() => setIsMenuOpened(false)} href='#menu'>
								Menu
							</a>
						</li>
						<li className='nav__menu-item'>
							<a className='p-3' onClick={() => setIsMenuOpened(false)} href='#kontakt'>
								Kontakt
							</a>
						</li>
					</ul>

					<div className='d-flex align-items-center'>
						<Button className='nav__hamburger custom-btn d-lg-none me-2' onClick={handleMenuOpen}>
							{isMenuOpened ? <MenuOpenIcon /> : <MenuIcon />}
						</Button>
						<div className='d-flex align-items-center'>
							<Button className='nav__shoping-cart custom-btn' onClick={handleOpenCart}>
								<ShoppingCartIcon />
							</Button>
							<span className='ms-1'>({allAmounts})</span>
						</div>
					</div>
				</div>
				{isOpenedCart && <Cart displayCart={isOpenedCart} />}
			</Container>
		</nav>
	);
}
