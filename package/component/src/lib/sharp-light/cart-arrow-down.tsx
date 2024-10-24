
import { Icon } from "../../index";

/**
 * A component that renders the `cart-arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-down?s=sharp-light cart-arrow-down}
 * @preview ![cart-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cart-arrow-down.svg)
 */
const CartArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L16 0 80 0 92.8 0l2.8 12.5L151 256 476 256 541.9 32l33.4 0L503.4 276.5 500 288l-12 0-329.8 0 14.5 64L496 352l16 0 0 32-16 0-336 0-12.8 0-2.8-12.5L67.2 32 16 32 0 32 0 0zM184 480a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm296 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM336 16l0 137.4 36.7-36.7L384 105.4 406.6 128l-11.3 11.3-64 64L320 214.6l-11.3-11.3-64-64L233.4 128 256 105.4l11.3 11.3L304 153.4 304 16l0-16 32 0 0 16z" />
    </Icon>
);

export default CartArrowDown;