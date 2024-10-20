
import { Icon } from "../../index";

/**
 * A component that renders the `battery-low` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-low?s=regular battery-low}
 * @preview ![battery-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/battery-low.svg)
 */
const BatteryLow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 144c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L80 368c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm80 96l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default BatteryLow;