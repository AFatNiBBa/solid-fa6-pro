
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-low` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-low?s=sharp-thin gauge-simple-low}
 * @preview ![gauge-simple-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gauge-simple-low.svg)
 */
const GaugeSimpleLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm0 400a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 16c-35.3 0-64-28.7-64-64c0-22.2 11.3-41.7 28.4-53.2L136.8 131.6l-3.6-7.2 14.3-7.2 3.6 7.2 83.6 167.2c6.6-2.3 13.8-3.6 21.2-3.6c35.3 0 64 28.7 64 64s-28.7 64-64 64z" />
    </Icon>
);

export default GaugeSimpleLow;