
import { Icon } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=sharp-light charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 32l0 448L64 480 64 32l224 0zM32 32l0 448L0 480l0 32 32 0 32 0 224 0 32 0 32 0 0-32-32 0 0-192 16 0c26.5 0 48 21.5 48 48l0 48c0 35.3 28.7 64 64 64s64-28.7 64-64l0-113.6c36.5-7.4 64-39.7 64-78.4l0-48 0-16-16 0-16 0 0-48 0-16-32 0 0 16 0 48-32 0 0-48 0-16-32 0 0 16 0 48-16 0-16 0 0 16 0 48c0 38.7 27.5 71 64 78.4L480 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-44.2-35.8-80-80-80l-16 0 0-224 0-32L288 0 64 0 32 0l0 32zM512 160l32 0 0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32 32 0 32 0zM204.8 121.6l9.6-12.8L188.8 89.6l-9.6 12.8-72 96L88 224l32 0 80 0-52.8 70.4-9.6 12.8 25.6 19.2 9.6-12.8 72-96L264 192l-32 0-80 0 52.8-70.4z" />
    </Icon>
);

export default ChargingStation;