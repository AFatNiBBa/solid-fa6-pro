
import { Icon } from "../../index";

/**
 * A component that renders the `cart-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-arrow-up?s=sharp-thin cart-arrow-up}
 * @preview ![cart-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cart-arrow-up.svg)
 */
const CartArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L8 0 64 0l6.2 0 1.6 6 69.4 266 341 0L557.6 32l16.8 0L495.6 282.4l-1.8 5.6-5.9 0-342.7 0 20.9 80L496 368l8 0 0 16-8 0-336 0-6.2 0-1.6-6L57.8 16 8 16 0 16 0 0zM208 464a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM312 232l0-172.7-66.3 66.3-5.7 5.7L228.7 120l5.7-5.7 80-80 5.7-5.7 5.7 5.7 80 80 5.7 5.7L400 131.3l-5.7-5.7L328 59.3 328 232l0 8-16 0 0-8z" />
    </Icon>
);

export default CartArrowUp;