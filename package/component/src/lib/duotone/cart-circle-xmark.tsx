
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-circle-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-xmark?s=duotone cart-circle-xmark}
 * @preview ![cart-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cart-circle-xmark.svg)
 */
const CartCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 24C0 37.3 10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5l121 0c-.5-5.3-.7-10.6-.7-16c0-10.9 1-21.6 2.9-32l-123.2 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l168.5 0c29.1-57 88.4-96 156.8-96c14.8 0 29.1 1.8 42.8 5.2L569.7 82.4c.9-3.5 1.4-7 1.4-10.5c0-21.4-17.3-39.9-40-39.9l-411 0C111 12.8 91.6 0 69.5 0L24 0C10.7 0 0 10.7 0 24zM128 464a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-59.3c-6.2-6.2-16.4-6.2-22.6 0L496 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L473.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L496 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L518.6 368l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default CartCircleXmark;