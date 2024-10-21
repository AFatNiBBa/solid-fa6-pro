
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-xmark?s=duotone cart-xmark}
 * @preview ![cart-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cart-xmark.svg)
 */
const CartXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M120.1 32c2 4.2 3.5 8.8 4.4 13.5c15.4 80.8 30.8 161.6 46.2 242.5l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3c.9-3.5 1.4-7 1.4-10.5c0-21.4-17.4-39.9-40-39.9l-411 0zm156.5 68.6c7.8-7.8 20.5-7.8 28.3 0L336 131.7l31.1-31.1c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L364.3 160l31.1 31.1c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0L336 188.3c-10.4 10.4-20.7 20.7-31.1 31.1c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3L307.7 160c-10.4-10.4-20.7-20.7-31.1-31.1c-7.8-7.8-7.8-20.5 0-28.3z" />
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5l-51.6-271C119.5 19.1 96.4 0 69.5 0L24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM395.4 128.9c7.8-7.8 7.8-20.5 0-28.3s-20.5-7.8-28.3 0L336 131.7l-31.1-31.1c-7.8-7.8-20.5-7.8-28.3 0s-7.8 20.5 0 28.3L307.7 160l-31.1 31.1c-7.8 7.8-7.8 20.5 0 28.3s20.5 7.8 28.3 0L336 188.3l31.1 31.1c7.8 7.8 20.5 7.8 28.3 0s7.8-20.5 0-28.3L364.3 160l31.1-31.1z" />
    </Icon>
);

export default CartXmark;