
import { Icon, generic } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=duotone charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 192 0 48 0 144L32 448 32 64zM81 197.6c2.3 6.3 8.3 10.4 15 10.4l57.8 0-25 74.9c-2.3 6.8 .3 14.3 6.3 18.3s13.9 3.6 19.3-1.1l112-96c5.1-4.4 6.9-11.4 4.6-17.7s-8.3-10.4-15-10.4l-57.8 0 25-74.9c2.3-6.8-.3-14.3-6.3-18.3s-13.9-3.6-19.3 1.1l-112 96c-5.1 4.4-6.9 11.4-4.6 17.7z" />
        <path d="M480 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-16 0c-8.8 0-16 7.2-16 16l0 32c0 35.8 23.5 66.1 56 76.3L472 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-48.6-39.4-88-88-88l-16 0 0 48 16 0c22.1 0 40 17.9 40 40l0 32c0 39.8 32.2 72 72 72s72-32.2 72-72l0-123.7c32.5-10.2 56-40.5 56-76.3l0-32c0-8.8-7.2-16-16-16l-16 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-32 0 0-48zM0 480c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default ChargingStation;