
import { Icon } from "../../index";

/**
 * A component that renders the `cart-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-xmark?s=sharp-solid cart-xmark}
 * @preview ![cart-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cart-xmark.svg)
 */
const CartXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L24 0 96 0l19.9 0 3.7 19.5L122 32l454 0L496 288l-325.3 0 9.1 48L488 336l24 0 0 48-24 0-328 0-19.9 0-3.7-19.5L76.1 48 24 48 0 48 0 0zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM378.4 89.3L336 131.7 293.6 89.3l-28.3 28.3L307.7 160l-42.4 42.4 28.3 28.3L336 188.3l42.4 42.4 28.3-28.3L364.3 160l42.4-42.4L378.4 89.3z" />
    </Icon>
);

export default CartXmark;