
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-empty?s=sharp-duotone-solid cart-flatbed-empty}
 * @preview ![cart-flatbed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-flatbed-empty.svg)
 */
const CartFlatbedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l-90.5 0c-1.8 5-2.7 10.4-2.7 16zm288 0c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l-90.5 0c-1.8 5-2.7 10.4-2.7 16z" />
        <path d="M0 0L32 0 96 0l32 0 0 32 0 352 480 0 32 0 0 64-32 0L96 448l-32 0 0-32L64 64 32 64 0 64 0 0z" />
    </Icon>
);

export default CartFlatbedEmpty;