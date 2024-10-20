
import { Icon } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=light charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 32c17.7 0 32 14.3 32 32l0 416L64 480 64 64c0-17.7 14.3-32 32-32l160 0zM32 64l0 416-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 32 0 224 0 32 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-192 16 0c26.5 0 48 21.5 48 48l0 48c0 35.3 28.7 64 64 64s64-28.7 64-64l0-113.6c36.5-7.4 64-39.7 64-78.4l0-48c0-8.8-7.2-16-16-16l-16 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-16 0c-8.8 0-16 7.2-16 16l0 48c0 38.7 27.5 71 64 78.4L480 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-44.2-35.8-80-80-80l-16 0 0-192c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64zm432 96l64 0 16 0 0 32c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-32 16 0zM204.8 121.6c5.3-7.1 3.9-17.1-3.2-22.4s-17.1-3.9-22.4 3.2l-72 96c-3.6 4.8-4.2 11.3-1.5 16.8s8.3 8.8 14.3 8.8l80 0-52.8 70.4c-5.3 7.1-3.9 17.1 3.2 22.4s17.1 3.9 22.4-3.2l72-96c3.6-4.8 4.2-11.3 1.5-16.8s-8.3-8.8-14.3-8.8l-80 0 52.8-70.4z" />
    </Icon>
);

export default ChargingStation;