
import { Icon } from "../../index";

/**
 * A component that renders the `basket-shopping` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping?s=sharp-solid basket-shopping}
 * @preview ![basket-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/basket-shopping.svg)
 */
const BasketShopping: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M245.3 51.1l11.1-21.3L213.8 7.6 202.7 28.9 117.6 192 0 192l0 64 32 0L96 512l384 0 64-256 32 0 0-64-117.6 0L373.3 28.9 362.2 7.6 319.6 29.8l11.1 21.3L404.2 192l-232.5 0L245.3 51.1zM192 304l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16zm112-16l0 16 0 96 0 16-32 0 0-16 0-96 0-16 32 0zm112 16l0 96 0 16-32 0 0-16 0-96 0-16 32 0 0 16z" />
    </Icon>
);

export default BasketShopping;