
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basket-shopping-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping-plus?s=duotone basket-shopping-plus}
 * @preview ![basket-shopping-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/basket-shopping-plus.svg)
 */
const BasketShoppingPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 17.7 14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-98.4 0L393 192l-210 0-52.6 0L32 192c-17.7 0-32 14.3-32 32zM184 352c0-13.3 10.7-24 24-24l56 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56-56 0c-13.3 0-24-10.7-24-24z" />
        <path d="M253.9 33.8L183 192l-52.6 0L210.1 14.2c5.4-12.1 19.6-17.5 31.7-12.1s17.5 19.6 12.1 31.7zm112-19.6L445.6 192 393 192 322.1 33.8c-5.4-12.1 0-26.3 12.1-31.7s26.3 0 31.7 12.1zM264 432l0-56-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
    </Icon>
);

export default BasketShoppingPlus;