
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed-suitcase` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-suitcase?s=duotone cart-flatbed-suitcase}
 * @preview ![cart-flatbed-suitcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cart-flatbed-suitcase.svg)
 */
const CartFlatbedSuitcase: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48zm32-320c0-26.5 21.5-48 48-48l16 0 0 224-16 0c-26.5 0-48-21.5-48-48l0-128zm96-88c0-30.9 25.1-56 56-56l80 0c30.9 0 56 25.1 56 56l0 40 0 224-192 0 0-224 0-40zm48 0l0 40 96 0 0-40c0-4.4-3.6-8-8-8l-80 0c-4.4 0-8 3.6-8 8zM448 464c0-5.6 1-11 2.7-16l90.5 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48s-48-21.5-48-48zM512 96l16 0c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-16 0 0-224z" />
        <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l16 0c8.8 0 16 7.2 16 16l0 288c0 44.2 35.8 80 80 80l464 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-464 0c-8.8 0-16-7.2-16-16l0-288C128 35.8 92.2 0 48 0L32 0zM256 96l0 224 32 0 0-224-32 0zm224 0l0 224 32 0 0-224-32 0z" />
    </Icon>
);

export default CartFlatbedSuitcase;