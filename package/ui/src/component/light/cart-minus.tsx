
import { Icon } from "../../index";

/**
 * A component that renders the `cart-minus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-minus?s=light cart-minus}
 * @preview ![cart-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cart-minus.svg)
 */
const CartMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 16C0 7.2 7.2 0 16 0L53.9 0c22.8 0 42.5 16 47 38.4L145.4 256l321.1 0c14.7 0 27.5-10 31-24.2L544.5 44.1c2.1-8.6 10.8-13.8 19.4-11.6s13.8 10.8 11.6 19.4L528.6 239.5C521.5 268 495.9 288 466.5 288L152 288l7.9 38.4c3 14.9 16.1 25.6 31.4 25.6L496 352c8.8 0 16 7.2 16 16s-7.2 16-16 16l-304.8 0c-30.4 0-56.6-21.4-62.7-51.2L69.6 44.8C68 37.3 61.5 32 53.9 32L16 32C7.2 32 0 24.8 0 16zM192 480a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm280 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-80 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM256 112l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default CartMinus;