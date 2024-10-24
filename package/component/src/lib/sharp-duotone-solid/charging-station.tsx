
import { Icon, generic } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=sharp-duotone-solid charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 0L320 0l0 256 0 48 0 144L32 448 32 0zM80 224l88 0-24 96L272 192l-88 0 24-96L80 224z" />
        <path d="M480 80l0-16-32 0 0 16 0 48-32 0 0 48c0 35.8 23.5 66.1 56 76.3L472 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-48.6-39.4-88-88-88l-16 0 0 48 16 0c22.1 0 40 17.9 40 40l0 32c0 39.8 32.2 72 72 72s72-32.2 72-72l0-123.7c32.5-10.2 56-40.5 56-76.3l0-48-32 0 0-48 0-16-32 0 0 16 0 48-32 0 0-48zM0 448l0 64 352 0 0-64L0 448z" />
    </Icon>
);

export default ChargingStation;