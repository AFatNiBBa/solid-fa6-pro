
import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-plus?s=solid cart-circle-plus}
 * @preview ![cart-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cart-circle-plus.svg)
 */
const CartCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4L538.8 197.2c-13.7-3.4-28.1-5.2-42.8-5.2c-68.4 0-127.7 39-156.8 96l-168.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5l123.2 0c-1.9 10.4-2.9 21.1-2.9 32c0 5.4 .2 10.7 .7 16l-121 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm512-96a144 144 0 1 1 -288 0 144 144 0 1 1 288 0zm-80 16c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0z" />
    </Icon>
);

export default CartCirclePlus;