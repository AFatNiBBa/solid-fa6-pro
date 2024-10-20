
import { Icon } from "../../index";

/**
 * A component that renders the `cart-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-down?s=sharp-solid cart-arrow-down}
 * @preview ![cart-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-arrow-down.svg)
 */
const CartArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 32L122 32l-2.4-12.5L115.9 0 96 0 24 0 0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 328 0 24 0 0-48-24 0-308.1 0-9.1-48L496 288 576 32 360 32l0 99.1 24.2-21.2 18.1-15.8 31.6 36.1-18.1 15.8-64 56L336 215.9l-15.8-13.8-64-56-18.1-15.8 31.6-36.1 18.1 15.8L312 131.1 312 32zM224 464a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm240 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default CartArrowDown;