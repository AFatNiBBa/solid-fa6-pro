
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-max` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-max?s=sharp-solid gauge-simple-max}
 * @preview ![gauge-simple-max](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gauge-simple-max.svg)
 */
const GaugeSimpleMax: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-3.7-.3-7.3-.9-10.8l117.5-72.8L457 255.8 431.8 215l-20.4 12.6L293.8 300.4C283.2 292.6 270.1 288 256 288c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default GaugeSimpleMax;