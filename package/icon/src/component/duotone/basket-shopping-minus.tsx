
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basket-shopping-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping-minus?s=duotone basket-shopping-minus}
 * @preview ![basket-shopping-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/basket-shopping-minus.svg)
 */
const BasketShoppingMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224c0-17.7 14.3-32 32-32l98.4 0 52.6 0 210 0 52.6 0 98.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L492.1 463.5C485 492 459.4 512 430 512L146 512c-29.4 0-55-20-62.1-48.5L32 256c-17.7 0-32-14.3-32-32zM184 352c0 13.3 10.7 24 24 24l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-160 0c-13.3 0-24 10.7-24 24z" />
        <path d="M253.9 33.8L183 192l-52.6 0L210.1 14.2c5.4-12.1 19.6-17.5 31.7-12.1s17.5 19.6 12.1 31.7zm112-19.6L445.6 192 393 192 322.1 33.8c-5.4-12.1 0-26.3 12.1-31.7s26.3 0 31.7 12.1zM208 328l160 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default BasketShoppingMinus;