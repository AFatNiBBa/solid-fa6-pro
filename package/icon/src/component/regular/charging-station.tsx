
import { Icon } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=regular charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 48c-8.8 0-16 7.2-16 16l0 400 192 0 0-400c0-8.8-7.2-16-16-16L96 48zM32 464L32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 192 8 0c48.6 0 88 39.4 88 88l0 28c0 15.5 12.5 28 28 28s28-12.5 28-28l0-103.7c-32.5-10.2-56-40.5-56-76.3l0-40c0-13.3 10.7-24 24-24l8 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 8 0c13.3 0 24 10.7 24 24l0 40c0 35.8-23.5 66.1-56 76.3L520 372c0 42-34 76-76 76s-76-34-76-76l0-28c0-22.1-17.9-40-40-40l-8 0 0 160 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0-48 0L80 512l-48 0-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0zM464 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16-64 0 0 16zM222.9 117.9L199.6 176l40.4 0c6.7 0 12.8 4.2 15 10.6s.4 13.4-4.8 17.7l-96 80c-5.6 4.7-13.7 5-19.6 .7s-8.2-12.1-5.5-18.9L152.4 208 112 208c-6.7 0-12.8-4.2-15-10.6s-.4-13.4 4.8-17.7l96-80c5.6-4.7 13.7-5 19.6-.7s8.2 12.1 5.5 18.9z" />
    </Icon>
);

export default ChargingStation;