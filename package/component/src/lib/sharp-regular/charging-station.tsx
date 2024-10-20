
import { Icon } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=sharp-regular charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 48l0 416 192 0 0-416L80 48zM32 464L32 48 32 0 80 0 272 0l48 0 0 48 0 208 8 0c48.6 0 88 39.4 88 88l0 28c0 15.5 12.5 28 28 28s28-12.5 28-28l0-103.7c-32.5-10.2-56-40.5-56-76.3l0-40 0-24 24 0 8 0 0-48 0-16 32 0 0 16 0 48 32 0 0-48 0-16 32 0 0 16 0 48 8 0 24 0 0 24 0 40c0 35.8-23.5 66.1-56 76.3L520 372c0 42-34 76-76 76s-76-34-76-76l0-28c0-22.1-17.9-40-40-40l-8 0 0 160 32 0 0 48-32 0-48 0L80 512l-48 0L0 512l0-48 32 0zM464 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16-64 0 0 16zM96 224L224 112l-22.9 80 54.9 0L128 304l22.9-80L96 224z" />
    </Icon>
);

export default ChargingStation;