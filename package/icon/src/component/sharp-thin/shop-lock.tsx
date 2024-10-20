
import { Icon } from "../../index";

/**
 * A component that renders the `shop-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-lock?s=sharp-thin shop-lock}
 * @preview ![shop-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shop-lock.svg)
 */
const ShopLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 224l346.8 0c2.7-5.6 5.8-11 9.3-16L16 208l0-27.9L105.5 16l429 0L624 180.1l0 27.9-4.1 0c3.5 5 6.6 10.4 9.3 16l10.8 0 0-16 0-32L544 0 96 0 0 176l0 32 0 16 16 0 48 0 0 280c0 4.4 3.6 8 8 8l304 0c4.4 0 8-3.6 8-8l0-248-16 0 0 240L80 496l0-272zm48 136c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24l0-104-16 0 0 104c0 4.4-3.6 8-8 8l-144 0c-4.4 0-8-3.6-8-8l0-104-16 0 0 104zM528 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 80l32 0 16 0 96 0 16 0 32 0 0 160-192 0 0-160z" />
    </Icon>
);

export default ShopLock;