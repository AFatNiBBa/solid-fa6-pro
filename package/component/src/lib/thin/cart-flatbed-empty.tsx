
import { Icon } from "../../index";

/**
 * A component that renders the `cart-flatbed-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-empty?s=thin cart-flatbed-empty}
 * @preview ![cart-flatbed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cart-flatbed-empty.svg)
 */
const CartFlatbedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 8C0 3.6 3.6 0 8 0L88 0c22.1 0 40 17.9 40 40l0 352c0 13.3 10.7 24 24 24l72 0 288 0 120 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-84.2 0c7.6 8.5 12.2 19.7 12.2 32c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32l-216.4 0c7.6 8.5 12.2 19.7 12.2 32c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-12.3 4.6-23.5 12.2-32L152 432c-22.1 0-40-17.9-40-40l0-352c0-13.3-10.7-24-24-24L8 16c-4.4 0-8-3.6-8-8zM512 432a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 464a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
    </Icon>
);

export default CartFlatbedEmpty;