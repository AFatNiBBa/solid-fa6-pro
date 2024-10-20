
import { Icon } from "../../index";

/**
 * A component that renders the `cart-arrow-up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-up?s=regular cart-arrow-up}
 * @preview ![cart-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cart-arrow-up.svg)
 */
const CartArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M296 184l0-102.1-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L303 7c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23L344 184c0 13.3-10.7 24-24 24s-24-10.7-24-24zM0 24C0 10.7 10.7 0 24 0L69.5 0c26.9 0 50 19.1 55 45.5l37 194.5 297.6 0c10.9 0 20.4-7.3 23.2-17.8L528.8 49.8c3.4-12.8 16.6-20.4 29.4-16.9s20.4 16.6 16.9 29.4L528.7 234.7c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CartArrowUp;