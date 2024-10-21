
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=thin gauge-simple}
 * @preview ![gauge-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gauge-simple.svg)
 */
const GaugeSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112c35.3 0 64-28.7 64-64c0-32.6-24.4-59.6-56-63.5L264 80c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 208.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default GaugeSimple;