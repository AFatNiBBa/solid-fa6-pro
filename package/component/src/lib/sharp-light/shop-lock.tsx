
import { Icon } from "../../index";

/**
 * A component that renders the `shop-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop-lock?s=sharp-light shop-lock}
 * @preview ![shop-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shop-lock.svg)
 */
const ShopLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M449.6 192c-9.4 9.2-17.1 20-22.8 32L96 224l0 128 256 0 0-80 0-16 32 0 0 16 0 15.7s0 0 0 0L384 512l-16 0L80 512l-16 0 0-16 0-272-32 0L0 224l0-32 0-16L96 0 544 0l96 176 0 16 0 32-10.8 0c-5.7-12-13.5-22.8-22.8-32l1.6 0 0-7.8L525 32 115 32 32 184.2l0 7.8 32 0 32 0 353.6 0zM96 480l256 0 0-96L96 384l0 96zM528 224c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 32 0 128 0 32-32 0-160 0-32 0 0-32 0-128 0-32 32 0 0-48zm0 80l0 128 160 0 0-128-160 0z" />
    </Icon>
);

export default ShopLock;