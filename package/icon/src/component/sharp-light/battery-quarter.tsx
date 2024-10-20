
import { Icon } from "../../index";

/**
 * A component that renders the `battery-quarter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-quarter?s=sharp-light battery-quarter}
 * @preview ![battery-quarter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/battery-quarter.svg)
 */
const BatteryQuarter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 128l0 256L32 384l0-256 448 0zM32 96L0 96l0 32L0 384l0 32 32 0 448 0 32 0 0-32 0-256 0-32-32 0L32 96zm544 96l-32 0 0 32 0 64 0 32 32 0 0-32 0-64 0-32zM96 192l64 0 0 128-64 0 0-128zM64 160l0 32 0 128 0 32 32 0 64 0 32 0 0-32 0-128 0-32-32 0-64 0-32 0z" />
    </Icon>
);

export default BatteryQuarter;