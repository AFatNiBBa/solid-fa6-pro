
import { Icon } from "../../index";

/**
 * A component that renders the `cart-circle-arrow-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-circle-arrow-up?s=light cart-circle-arrow-up}
 * @preview ![cart-circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cart-circle-arrow-up.svg)
 */
const CartCircleArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l37.9 0c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2l129.5 0c-.5-5.3-.7-10.6-.7-16s.2-10.7 .7-16l-129.5 0c-15.2 0-28.3-10.7-31.4-25.6L152 288l187.2 0c5.9-11.4 12.9-22.2 21-32l-214.8 0L106.1 64l433.4 0L507.4 192.4c10.9 .7 21.5 2.4 31.7 5L570.6 71.8c5-20.2-10.2-39.8-31-39.8L99.1 32C92.5 13 74.4 0 53.9 0L16 0zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm136-88a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-211.3 3.3c6.2 6.2 16.4 6.2 22.6 0L480 342.6l0 89.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-89.4 28.7 28.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56-56c-6.2-6.2-16.4-6.2-22.6 0l-56 56c-6.2 6.2-6.2 16.4 0 22.6z" />
    </Icon>
);

export default CartCircleArrowUp;