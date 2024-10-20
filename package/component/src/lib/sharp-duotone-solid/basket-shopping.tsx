
import { Icon, generic } from "../../index";

/**
 * A component that renders the `basket-shopping` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping?s=sharp-duotone-solid basket-shopping}
 * @preview ![basket-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/basket-shopping.svg)
 */
const BasketShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192l0 64 32 0L96 512l384 0 64-256 32 0 0-64-124.4 0c6 12.5 12 25.1 18.1 37.6c3.5 7.2 6.9 14.4 10.4 21.6c-14.4 6.9-28.8 13.8-43.3 20.8c-3.5-7.2-6.9-14.4-10.4-21.6c-9.3-19.5-18.7-38.9-28-58.4l-220.7 0c-9.3 19.5-18.7 38.9-28 58.4c-3.5 7.2-6.9 14.4-10.4 21.6c-14.4-6.9-28.8-13.8-43.3-20.8l10.4-21.6L124.4 192 0 192zM160 304l32 0 0 16 0 96 0 16-32 0 0-16 0-96 0-16zm112 0l32 0 0 16 0 96 0 16-32 0 0-16 0-96 0-16zm112 0l32 0 0 16 0 96 0 16-32 0 0-16 0-96 0-16z" />
        <path d="M245.6 50.4L256 28.7 212.7 8 202.4 29.6l-96 200L96 251.3 139.3 272l10.4-21.6 96-200zm84.7 0l96 200L436.7 272 480 251.3l-10.4-21.6-96-200L363.3 8 320 28.7l10.4 21.6z" />
    </Icon>
);

export default BasketShopping;