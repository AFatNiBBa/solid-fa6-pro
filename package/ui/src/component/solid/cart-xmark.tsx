
import { Icon } from "../../index";

/**
 * A component that renders the `cart-xmark` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-xmark?s=solid cart-xmark}
 * @preview ![cart-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cart-xmark.svg)
 */
const CartXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM395.4 128.9L364.3 160l31.1 31.1c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0L336 188.3l-31.1 31.1c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3L307.7 160l-31.1-31.1c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0L336 131.7l31.1-31.1c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3z" />
    </Icon>
);

export default CartXmark;