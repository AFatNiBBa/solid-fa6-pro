
import { Icon } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=sharp-solid charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L32 0l0 416 288 0 0-112 16 0c22.1 0 40 17.9 40 40l0 32c0 39.8 32.2 72 72 72s72-32.2 72-72l0-123.7c32.5-10.2 56-40.5 56-76.3l0-48-32 0 0-48 0-16-32 0 0 16 0 48-32 0 0-48 0-16-32 0 0 16 0 48-32 0 0 48c0 35.8 23.5 66.1 56 76.3L472 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32c0-48.6-39.4-88-88-88l-16 0L320 0zM208 96l-24 96 88 0L144 320l24-96-88 0L208 96zM352 448L0 448l0 64 352 0 0-64z" />
    </Icon>
);

export default ChargingStation;