
import { Icon } from "../../index";

/**
 * A component that renders the `cart-arrow-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-up?s=sharp-light cart-arrow-up}
 * @preview ![cart-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cart-arrow-up.svg)
 */
const CartArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L16 0 80 0 92.8 0l2.8 12.5L151 256 476 256 541.9 32l33.4 0L503.4 276.5 500 288l-12 0-329.8 0 14.5 64L496 352l16 0 0 32-16 0-336 0-12.8 0-2.8-12.5L67.2 32 16 32 0 32 0 0zM184 480a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm296 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM304 208l0-121.4-36.7 36.7L256 134.6 233.4 112l11.3-11.3 64-64L320 25.4l11.3 11.3 64 64L406.6 112 384 134.6l-11.3-11.3L336 86.6 336 208l0 16-32 0 0-16z" />
    </Icon>
);

export default CartArrowUp;