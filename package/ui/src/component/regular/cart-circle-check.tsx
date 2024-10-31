
import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-check?s=regular cart-circle-check}
 * @preview ![cart-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cart-circle-check.svg)
 */
const CartCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5l121 0c-.5-5.3-.7-10.6-.7-16c0-10.9 1-21.6 2.9-32l-123.2 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l168.5 0c9.2-18 21.4-34.2 36-48l-213.6 0L131.1 80l389.6 0L490.5 192.1c1.8-.1 3.7-.1 5.5-.1c14.8 0 29.1 1.8 42.8 5.2L569.7 82.4C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-99.3-43.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7z" />
    </Icon>
);

export default CartCircleCheck;