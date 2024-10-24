
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basket-shopping` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping?s=duotone basket-shopping}
 * @preview ![basket-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/basket-shopping.svg)
 */
const BasketShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 17.7 14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-98.4 0c8.1 18.1 16.2 36.1 24.3 54.2c5.4 12.1 0 26.3-12.1 31.7s-26.3 0-31.7-12.1c-11-24.6-22.1-49.2-33.1-73.8l-210 0c-11 24.6-22.1 49.2-33.1 73.8c-4 8.9-12.7 14.2-21.9 14.2c-3.3 0-6.6-.7-9.8-2.1c-12.1-5.4-17.5-19.6-12.1-31.7c8.1-18.1 16.2-36.1 24.3-54.2L32 192c-17.7 0-32 14.3-32 32zm160 96c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96zm112 0c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96zm112 0c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96z" />
        <path d="M253.9 33.8c5.4-12.1 0-26.3-12.1-31.7s-26.3 0-31.7 12.1l-104 232c-5.4 12.1 0 26.3 12.1 31.7s26.3 0 31.7-12.1l104-232zm68.2 0l104 232c5.4 12.1 19.6 17.5 31.7 12.1s17.5-19.6 12.1-31.7l-104-232C360.5 2.1 346.3-3.3 334.2 2.1s-17.5 19.6-12.1 31.7z" />
    </Icon>
);

export default BasketShopping;