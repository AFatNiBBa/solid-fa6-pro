
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-min` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-min?s=sharp-light gauge-simple-min}
 * @preview ![gauge-simple-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gauge-simple-min.svg)
 */
const GaugeSimpleMin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96c35.3 0 64-28.7 64-64s-28.7-64-64-64c-17.5 0-33.4 7-44.9 18.4L104.2 242.3 90.5 234 74 261.5l13.7 8.2 106.8 64.1c-1.7 5.8-2.6 11.9-2.6 18.2c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default GaugeSimpleMin;