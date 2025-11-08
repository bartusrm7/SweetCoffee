import { Button, Col, Container, Row } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";

export default function Menu() {
	const [amountOfCoffeeState, setAmountOfCoffeeState] = useState([
		{ coffee: "Americano", amount: 0 },
		{ coffee: "Flat White", amount: 0 },
		{ coffee: "Espresso", amount: 0 },
		{ coffee: "Cappuccino", amount: 0 },
		{ coffee: "Latte", amount: 0 },
		{ coffee: "Cold Brew", amount: 0 },
	]);
	const [newProduct, setNewProduct] = useState([{ productName: "", productPrice: 0, productAmount: 0 }]);

	const handleAddNewProductToCart = coffeeName => {
		setNewProduct(amountOfCoffeeState);

		setAmountOfCoffeeState(prevState => prevState.map(item => (item.coffee === coffeeName ? { ...item, amount: 0 } : item)));
	};

	const handleAddProduct = coffeeName => {
		setAmountOfCoffeeState(prevState => prevState.map(item => (item.coffee === coffeeName ? { ...item, amount: Math.min(item.amount + 1, 9) } : item)));
	};
	const handleRemoveProduct = coffeeName => {
		setAmountOfCoffeeState(prevState => prevState.map(item => (item.coffee === coffeeName ? { ...item, amount: Math.max(item.amount - 1, 0) } : item)));
	};

	return (
		<div className='menu' id="menu">
			<Container>
				<Row>
					<Col lg={10} className='mx-auto d-flex justify-content-center align-items-center min-vh-100'>
						<div className='menu__main-container'>
							<h3 className='fw-bold text-center label-section my-5 w-100 px-3'>Sprawdź nasze menu i znajdź coś dla siebie</h3>
							<div className='menu__menu-items-container flex-column flex-wrap flex-xl-row justify-content-center align-items-center'>
								<div className='menu__item rounded-4 d-flex flex-column justify-content-center align-items-center'>
									<div className='menu__img-item mb-2'>
										<span className='menu__coffee-name py-2 px-3 rounded-5'>Americano</span>
									</div>
									<div className='menu__item-price-name fw-bold'>
										<span>11zł</span>
									</div>
									<div className='d-flex justify-content-center align-items-center'>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleAddProduct("Americano")}>
											<AddIcon />
										</Button>
										<Button className='custom-btn rounded-5' onClick={() => handleAddNewProductToCart("Americano")}>
											Do koszyka
										</Button>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleRemoveProduct("Americano")}>
											<RemoveIcon />
										</Button>
									</div>
									<span className='coffee-amount'>{amountOfCoffeeState.find(item => item.coffee === "Americano")?.amount}</span>
								</div>
								<div className='menu__item rounded-4 d-flex flex-column justify-content-center align-items-center'>
									<div className='menu__img-item mb-2'>
										<span className='menu__coffee-name py-2 px-3 rounded-5'>Flat White</span>
									</div>
									<div className='menu__item-price-name fw-bold'>
										<span>12zł</span>
									</div>
									<div className='d-flex justify-content-center align-items-center'>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleAddProduct("Flat White")}>
											<AddIcon />
										</Button>
										<Button className='custom-btn rounded-5' onClick={() => handleAddNewProductToCart("Flat White")}>
											Do koszyka
										</Button>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleRemoveProduct("Flat White")}>
											<RemoveIcon />
										</Button>
									</div>
									<span className='coffee-amount'>{amountOfCoffeeState.find(item => item.coffee === "Flat White")?.amount}</span>
								</div>
								<div className='menu__item rounded-4 d-flex flex-column justify-content-center align-items-center'>
									<div className='menu__img-item mb-2'>
										<span className='menu__coffee-name py-2 px-3 rounded-5'>Espresso</span>
									</div>
									<div className='menu__item-price-name fw-bold'>
										<span>9zł</span>
									</div>
									<div className='d-flex justify-content-center align-items-center'>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleAddProduct("Espresso")}>
											<AddIcon />
										</Button>
										<Button className='custom-btn rounded-5' onClick={() => handleAddNewProductToCart("Espresso")}>
											Do koszyka
										</Button>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleRemoveProduct("Espresso")}>
											<RemoveIcon />
										</Button>
									</div>
									<span className='coffee-amount'>{amountOfCoffeeState.find(item => item.coffee === "Espresso")?.amount}</span>
								</div>
								<div className='menu__item rounded-4 d-flex flex-column justify-content-center align-items-center'>
									<div className='menu__img-item mb-2'>
										<span className='menu__coffee-name py-2 px-3 rounded-5'>Cappuccino</span>
									</div>
									<div className='menu__item-price-name fw-bold'>
										<span>13zł</span>
									</div>
									<div className='d-flex justify-content-center align-items-center'>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleAddProduct("Cappuccino")}>
											<AddIcon />
										</Button>
										<Button className='custom-btn rounded-5' onClick={() => handleAddNewProductToCart("Cappuccino")}>
											Do koszyka
										</Button>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleRemoveProduct("Cappuccino")}>
											<RemoveIcon />
										</Button>
									</div>
									<span className='coffee-amount'>{amountOfCoffeeState.find(item => item.coffee === "Cappuccino")?.amount}</span>
								</div>
								<div className='menu__item rounded-4 d-flex flex-column justify-content-center align-items-center'>
									<div className='menu__img-item mb-2'>
										<span className='menu__coffee-name py-2 px-3 rounded-5'>Latte</span>
									</div>
									<div className='menu__item-price-name fw-bold'>
										<span>14zł</span>
									</div>
									<div className='d-flex justify-content-center align-items-center'>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleAddProduct("Latte")}>
											<AddIcon />
										</Button>
										<Button className='custom-btn rounded-5' onClick={() => handleAddNewProductToCart("Latte")}>
											Do koszyka
										</Button>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleRemoveProduct("Latte")}>
											<RemoveIcon />
										</Button>
									</div>
									<span className='coffee-amount'>{amountOfCoffeeState.find(item => item.coffee === "Latte")?.amount}</span>
								</div>
								<div className='menu__item rounded-4 d-flex flex-column justify-content-center align-items-center'>
									<div className='menu__img-item mb-2'>
										<span className='menu__coffee-name py-2 px-3 rounded-5'>Cold Brew</span>
									</div>
									<div className='menu__item-price-name fw-bold'>
										<span>15zł</span>
									</div>
									<div className='d-flex justify-content-center align-items-center'>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleAddProduct("Cold Brew")}>
											<AddIcon />
										</Button>
										<Button className='custom-btn rounded-5' onClick={() => handleAddNewProductToCart("Cold Brew")}>
											Do koszyka
										</Button>
										<Button className='cart-btn text-bg-light rounded-5 mx-1 px-3' onClick={() => handleRemoveProduct("Cold Brew")}>
											<RemoveIcon />
										</Button>
									</div>
									<span className='coffee-amount'>{amountOfCoffeeState.find(item => item.coffee === "Cold Brew")?.amount}</span>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
