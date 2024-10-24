
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=light battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM378.8 384L112 384c-26.5 0-48-21.5-48-48l0-160c0-12 4.4-22.9 11.7-31.4L50.5 124.8C39 138.7 32 156.5 32 176l0 160c0 44.2 35.8 80 80 80l307.4 0-40.5-32zM464 96L220.6 96l40.5 32L464 128c26.5 0 48 21.5 48 48l0 150 30.7 24.3c.8-4.6 1.3-9.4 1.3-14.3l0-160c0-44.2-35.8-80-80-80zm128 96c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default BatterySlash;