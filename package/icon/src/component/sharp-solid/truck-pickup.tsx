
import { Icon } from "../../index";

/**
 * A component that renders the `truck-pickup` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=sharp-solid truck-pickup}
 * @preview ![truck-pickup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/truck-pickup.svg)
 */
const TruckPickup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 32l-32 0 0 32 0 128L32 192l0 96L0 288l0 64 32 0 33.1 0c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16l66.3 0c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16l33.1 0 32 0 0-64-32 0 0-96-80.6 0L409 44l-9.6-12L384 32 256 32zM445.4 192L288 192l0-96 80.6 0 76.8 96zM224 368a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm288 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default TruckPickup;