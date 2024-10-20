
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-plus?s=sharp-duotone-solid cart-plus}
 * @preview ![cart-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cart-plus.svg)
 */
const CartPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M122 32c16.3 85.3 32.5 170.6 48.8 256L496 288 576 32 122 32zM256 140l60 0c0-20 0-40 0-60l40 0c0 20 0 40 0 60l60 0c0 13.3 0 26.7 0 40l-60 0 0 60-40 0c0-20 0-40 0-60l-60 0c0-13.3 0-26.7 0-40z" />
        <path d="M24 0L0 0 0 48l24 0 52.1 0 60.3 316.5 3.7 19.5 19.9 0 328 0 24 0 0-48-24 0-308.1 0L119.6 19.5 115.9 0 96 0 24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM316 80l0 60-60 0 0 40 60 0 0 60 40 0 0-60 60 0 0-40-60 0 0-60-40 0z" />
    </Icon>
);

export default CartPlus;