
import { Icon } from "../../index";

/**
 * A component that renders the `cart-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-xmark?s=regular cart-xmark}
 * @preview ![cart-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cart-xmark.svg)
 */
const CartXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3L575.2 62.2c3.4-12.8-4.1-26-16.9-29.4s-26 4.1-29.4 16.9L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0-37-194.5C119.5 19.1 96.4 0 69.5 0L24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM257.8 65.8c-9.4 9.4-9.4 24.6 0 33.9L286.1 128l-28.3 28.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L320 161.9l28.3 28.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L353.9 128l28.3-28.3c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L320 94.1 291.7 65.8c-9.4-9.4-24.6-9.4-33.9 0z" />
    </Icon>
);

export default CartXmark;