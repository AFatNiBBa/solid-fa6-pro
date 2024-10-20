
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shop-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-slash?s=duotone shop-slash}
 * @preview ![shop-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shop-slash.svg)
 */
const ShopSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 155.2c0-7.3 2.2-14.4 6.2-20.4L21 112.5 121.8 192l-85 0C16.5 192 0 175.5 0 155.2zM64 224l64 0 0 160 192 0 0-35.9 64 50.4 0 65.5c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-80 0-160zM74.1 32.8l7.6-11.4C90.7 8 105.6 0 121.7 0L518.3 0c16.1 0 31 8 39.9 21.4l75.6 113.3c4 6.1 6.2 13.2 6.2 20.4c0 20.3-16.5 36.8-36.8 36.8l-325.9 0C209.5 138.9 141.8 85.9 74.1 32.8zM320 224l64 0 0 51.7-64-50.2 0-1.5zm192 0l64 0 0 202.2c-21.3-16.7-42.7-33.4-64-50.2l0-152z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default ShopSlash;