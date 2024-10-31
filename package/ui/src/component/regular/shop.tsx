
import { Icon } from "../../index";

/**
 * A component that renders the `shop` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=regular shop}
 * @preview ![shop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shop.svg)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25C90.8 9.6 106.9 0 124.5 0l391 0c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3c0 21.1-17.1 38.2-38.2 38.2L576 224l0 264c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-264-144 0 0 248c0 22.1-17.9 40-40 40l-240 0c-22.1 0-40-17.9-40-40l0-248-25.8 0C17.1 224 0 206.9 0 185.8zM112 224l0 96 224 0 0-96-224 0zM515.5 48l-391 0L54.7 176l530.6 0L515.5 48zM112 464l224 0 0-96-224 0 0 96z" />
    </Icon>
);

export default Shop;