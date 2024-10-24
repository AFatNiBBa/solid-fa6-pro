
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed?s=duotone cart-flatbed}
 * @preview ![cart-flatbed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cart-flatbed.svg)
 */
const CartFlatbed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48zM192 80c0-26.5 21.5-48 48-48l96 0 0 144c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8c13-8.7 26.1-17.4 39.1-26.1l39.1 26.1c4.9 3.3 11.2 3.6 16.4 .8s8.5-8.2 8.5-14.1l0-144 96 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48l-320 0c-26.5 0-48-21.5-48-48l0-192zM448 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48z" />
        <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l16 0c8.8 0 16 7.2 16 16l0 288c0 44.2 35.8 80 80 80l464 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-464 0c-8.8 0-16-7.2-16-16l0-288C128 35.8 92.2 0 48 0L32 0zM336 176c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L400 163.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4 .8s8.5-8.2 8.5-14.1l0-144-16 0-16 0-64 0-16 0-16 0 0 144z" />
    </Icon>
);

export default CartFlatbed;