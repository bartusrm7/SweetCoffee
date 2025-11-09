import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import CoffeeProcess from "./components/CoffeeProcess";
import CartProvider from "./components/CartContext";

export default function App() {
	return (
		<>
			<CartProvider>
				<Home />
				<AboutUs />
				<CoffeeProcess />
				<Menu />
				<Footer />
			</CartProvider>
		</>
	);
}
