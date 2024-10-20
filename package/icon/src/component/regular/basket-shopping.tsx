
import { Icon } from "../../index";

/**
 * A component that renders the `basket-shopping` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping?s=regular basket-shopping}
 * @preview ![basket-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/basket-shopping.svg)
 */
const BasketShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M243.1 2.7c11.8 6.1 16.3 20.6 10.2 32.4L171.7 192l232.6 0L322.7 35.1c-6.1-11.8-1.5-26.3 10.2-32.4s26.2-1.5 32.4 10.2L458.4 192l36.1 0 49.5 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-20 0L476.1 463.5C469 492 443.4 512 414 512L162 512c-29.4 0-55-20-62.1-48.5L44 240l-20 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 49.5 0 36.1 0L210.7 12.9c6.1-11.8 20.6-16.3 32.4-10.2zM93.5 240l53 211.9c1.8 7.1 8.2 12.1 15.5 12.1L414 464c7.3 0 13.7-5 15.5-12.1l53-211.9-389 0zM224 312l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24zm64-24c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24zm112 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default BasketShopping;