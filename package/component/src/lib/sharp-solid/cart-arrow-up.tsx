
import { Icon } from "../../index";

/**
 * A component that renders the `cart-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-up?s=sharp-solid cart-arrow-up}
 * @preview ![cart-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-arrow-up.svg)
 */
const CartArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L24 0 96 0l19.9 0 3.7 19.5L122 32l454 0L496 288l-136 0 0-110.1 23 23 17 17L433.9 184l-17-17-64-64-17-17-17 17-64 64-17 17L272 217.9l17-17 23-23L312 288l-141.3 0 9.1 48L312 336l48 0 128 0 24 0 0 48-24 0-328 0-19.9 0-3.7-19.5L76.1 48 24 48 0 48 0 0zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CartArrowUp;