
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-empty?s=light cart-flatbed-empty}
 * @preview ![cart-flatbed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cart-flatbed-empty.svg)
 */
const CartFlatbedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 16C0 7.2 7.2 0 16 0L80 0c26.5 0 48 21.5 48 48l0 320c0 8.8 7.2 16 16 16l80 0 288 0 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-56.6 0c5.4 9.4 8.6 20.3 8.6 32c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32l-177.1 0c5.4 9.4 8.6 20.3 8.6 32c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-11.7 3.1-22.6 8.6-32L144 416c-26.5 0-48-21.5-48-48L96 48c0-8.8-7.2-16-16-16L16 32C7.2 32 0 24.8 0 16zM512 416a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 448a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default CartFlatbedEmpty;