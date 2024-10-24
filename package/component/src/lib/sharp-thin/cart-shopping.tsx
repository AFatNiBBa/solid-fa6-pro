
import { Icon } from "../../index";

/**
 * A component that renders the `cart-shopping` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-shopping?s=sharp-thin cart-shopping}
 * @preview ![cart-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cart-shopping.svg)
 */
const CartShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 49.8 0 94.4 362 1.6 6 6.2 0 336 0 8 0 0-16-8 0-329.8 0-20.9-80L496 288 571 48l5-16-16.8 0L78.5 32 71.7 6 70.2 0 64 0 8 0zM82.7 48l471.5 0-70 224-343.1 0L82.7 48zM176 432a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm256-48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CartShopping;