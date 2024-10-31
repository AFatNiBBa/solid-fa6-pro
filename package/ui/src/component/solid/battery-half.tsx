
import { Icon } from "../../index";

/**
 * A component that renders the `battery-half` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-half?s=solid battery-half}
 * @preview ![battery-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/battery-half.svg)
 */
const BatteryHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm208 96L96 192l0 128 192 0 0-128z" />
    </Icon>
);

export default BatteryHalf;