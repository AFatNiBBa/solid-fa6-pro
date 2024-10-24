
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-min` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-min?s=sharp-thin gauge-simple-min}
 * @preview ![gauge-simple-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gauge-simple-min.svg)
 */
const GaugeSimpleMin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112c35.3 0 64-28.7 64-64s-28.7-64-64-64c-18.8 0-35.7 8.1-47.4 21l-108-75.6L94 228.9 84.9 242l6.6 4.6 108 75.6c-4.7 8.9-7.4 19.1-7.4 29.9c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default GaugeSimpleMin;