
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-circle-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-arrow-down?s=sharp-duotone-solid cart-circle-arrow-down}
 * @preview ![cart-circle-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-circle-arrow-down.svg)
 */
const CartCircleArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L24 0 96 0l19.9 0 3.7 19.5L122 32l454 0L525.2 194.4c-9.5-1.6-19.3-2.4-29.2-2.4c-68.4 0-127.7 39-156.8 96l-168.5 0 9.1 48 143 0c-1.9 10.4-2.9 21.1-2.9 32c0 5.4 .2 10.7 .7 16L160 384l-19.9 0-3.7-19.5L76.1 48 24 48 0 48 0 0zM224 464a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M352 368a144 144 0 1 0 288 0 144 144 0 1 0 -288 0zm211.3 19.3l-56 56L496 454.6l-11.3-11.3-56-56L417.4 376 440 353.4l11.3 11.3L480 393.4l0-89.4 0-16 32 0 0 16 0 89.4 28.7-28.7L552 353.4 574.6 376l-11.3 11.3z" />
    </Icon>
);

export default CartCircleArrowDown;