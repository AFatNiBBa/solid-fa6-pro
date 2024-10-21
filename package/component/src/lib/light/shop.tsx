
import { Icon } from "../../index";

/**
 * A component that renders the `shop` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=light shop}
 * @preview ![shop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shop.svg)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 185.8c0-6.4 1.6-12.7 4.7-18.3L82.4 25C90.8 9.6 106.9 0 124.5 0l391 0c17.6 0 33.7 9.6 42.1 25l77.7 142.4c3.1 5.6 4.7 11.9 4.7 18.3c0 21.1-17.1 38.2-38.2 38.2L576 224l0 272c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-272L96 224l0 128 256 0 0-80 0-16 32 0 0 16 0 192c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-240-25.8 0C17.1 224 0 206.9 0 185.8zM80 192l480 0 41.8 0c3.4 0 6.2-2.8 6.2-6.2c0-1-.3-2.1-.8-3L529.6 40.3c-2.8-5.1-8.2-8.3-14-8.3l-391 0c-5.9 0-11.2 3.2-14 8.3L32.8 182.8c-.5 .9-.8 1.9-.8 3c0 3.4 2.8 6.2 6.2 6.2L80 192zM96 464c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-80L96 384l0 80z" />
    </Icon>
);

export default Shop;