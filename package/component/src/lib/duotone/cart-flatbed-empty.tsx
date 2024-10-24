
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-empty?s=duotone cart-flatbed-empty}
 * @preview ![cart-flatbed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cart-flatbed-empty.svg)
 */
const CartFlatbedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l-90.5 0c-1.8 5-2.7 10.4-2.7 16zm288 0c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l-90.5 0c-1.8 5-2.7 10.4-2.7 16z" />
        <path d="M0 32C0 14.3 14.3 0 32 0L48 0c44.2 0 80 35.8 80 80l0 288c0 8.8 7.2 16 16 16l464 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-464 0c-44.2 0-80-35.8-80-80L64 80c0-8.8-7.2-16-16-16L32 64C14.3 64 0 49.7 0 32z" />
    </Icon>
);

export default CartFlatbedEmpty;