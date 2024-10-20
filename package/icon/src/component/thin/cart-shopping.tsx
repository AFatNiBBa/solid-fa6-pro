
import { Icon } from "../../index";

/**
 * A component that renders the `cart-shopping` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-shopping?s=thin cart-shopping}
 * @preview ![cart-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cart-shopping.svg)
 */
const CartShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8l37.7 0C57.1 16 67 24.1 69.2 35.4l59.4 303.4c5.1 26.3 28.2 45.2 55 45.2L504 384c4.4 0 8-3.6 8-8s-3.6-8-8-8l-320.5 0c-19.1 0-35.6-13.5-39.3-32.3L134.9 288l339 0c26 0 48.6-17.9 54.5-43.3L566.6 81.1C572.5 56 553.4 32 527.7 32L84.8 32C81 13.4 64.7 0 45.7 0L8 0zM88 48l439.7 0c15.5 0 26.9 14.4 23.4 29.5L512.9 241.1c-4.2 18.1-20.4 30.9-39 30.9l-342.1 0L88 48zm56 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm240-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default CartShopping;