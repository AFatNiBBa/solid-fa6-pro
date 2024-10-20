
import { Icon } from "../../index";

/**
 * A component that renders the `shop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=sharp-light shop}
 * @preview ![shop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shop.svg)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 224l32 0 0-32 0-16L544 0 96 0 0 176l0 16 0 32 32 0 32 0 0 272 0 16 16 0 288 0 16 0 0-16 0-224 0-16-32 0 0 16 0 80L96 352l0-128 448 0 0 272 0 16 32 0 0-16 0-272 32 0zm-32-32l-32 0L96 192l-32 0-32 0 0-7.8L115 32l410 0 83 152.2 0 7.8-32 0zM96 480l0-96 256 0 0 96L96 480z" />
    </Icon>
);

export default Shop;