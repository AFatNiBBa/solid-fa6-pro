
import { Icon } from "../../index";

/**
 * A component that renders the `face-sunglasses` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sunglasses?s=sharp-solid face-sunglasses}
 * @preview ![face-sunglasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-sunglasses.svg)
 */
const FaceSunglasses: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512c141.4 0 256-114.6 256-256c0-31.8-5.8-62.2-16.4-90.3l.4-1.3 0-4.5 0-32 0-32-32 0-8.1 0C408.9 37.5 336.8 0 256 0S103.1 37.5 56.1 96L48 96 16 96l0 32 0 32 0 4.5 .4 1.3C5.8 193.8 0 224.2 0 256C0 397.4 114.6 512 256 512zM208 272L80 272 48 160l0-32 192 0 0 16 32 0 0-16 192 0 0 32L432 272l-128 0-27.4-96-41.1 0L208 272zm-78.3 71.2l28.6-14.3c8.7 17.5 41.3 55.2 97.7 55.2s88.9-37.7 97.7-55.2l28.6 14.3C369.7 368.3 327.6 416 256 416s-113.7-47.7-126.3-72.8z" />
    </Icon>
);

export default FaceSunglasses;