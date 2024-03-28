import Subtotal from "../components/Cart/Subtotal";
import { useStateValue } from "../StateProvider";
import CartItem from "../components/Cart/CartItem";

function CartPage() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="cartPage">
            <div className="cartPage_left">
                <div>
                    <h2 className="cartPage_title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CartItem
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className="cartPage_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default CartPage;