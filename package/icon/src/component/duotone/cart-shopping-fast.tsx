
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-shopping-fast` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-shopping-fast?s=duotone cart-shopping-fast}
 * @preview ![cart-shopping-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cart-shopping-fast.svg)
 */
const CartShoppingFast: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 120c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 96C10.7 96 0 106.7 0 120zm0 80c0 13.3 10.7 24 24 24l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0c-13.3 0-24 10.7-24 24zm0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 256c-13.3 0-24 10.7-24 24zM184.1 32c2 4.2 3.5 8.8 4.4 13.5c15.4 80.8 30.8 161.7 46.2 242.5l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3c.9-3.5 1.4-7 1.4-10.5c0-21.4-17.3-39.9-40-39.9l-411 0z" />
        <path d="M64 24C64 10.7 74.7 0 88 0l45.5 0c26.9 0 50 19.1 55 45.5l51.6 271c2.2 11.3 12.1 19.5 23.6 19.5L552 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5L88 48C74.7 48 64 37.3 64 24zM192 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CartShoppingFast;