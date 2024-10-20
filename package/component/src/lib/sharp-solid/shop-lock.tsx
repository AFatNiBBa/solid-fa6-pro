
import { Icon } from "../../index";

/**
 * A component that renders the `shop-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-lock?s=sharp-solid shop-lock}
 * @preview ![shop-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shop-lock.svg)
 */
const ShopLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 192l449.6 0c20.2-19.8 47.9-32 78.4-32s58.2 12.2 78.4 32l33.6 0 0-64L544 0 96 0 0 128l0 64zm384 32l-64 0 0 160-192 0 0-160-64 0 0 160 0 128 320 0 0-128 0-96.3 0-63.7zm144 16c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default ShopLock;