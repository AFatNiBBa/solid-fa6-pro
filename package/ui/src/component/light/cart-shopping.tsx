
import { Icon } from "../../index";

/**
 * A component that renders the `cart-shopping` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-shopping?s=light cart-shopping}
 * @preview ![cart-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cart-shopping.svg)
 */
const CartShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l37.9 0c7.6 0 14.2 5.3 15.7 12.8l58.9 288c6.1 29.8 32.3 51.2 62.7 51.2L496 384c8.8 0 16-7.2 16-16s-7.2-16-16-16l-304.8 0c-15.2 0-28.3-10.7-31.4-25.6L152 288l314.6 0c29.4 0 55-20 62.1-48.5L570.6 71.8c5-20.2-10.2-39.8-31-39.8L99.1 32C92.5 13 74.4 0 53.9 0L16 0zm90.1 64l433.4 0L497.6 231.8C494 246 481.2 256 466.5 256l-321.1 0L106.1 64zM168 456a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm200-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" />
    </Icon>
);

export default CartShopping;