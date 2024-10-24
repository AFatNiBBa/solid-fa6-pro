
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-high` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-high?s=light gauge-high}
 * @preview ![gauge-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gauge-high.svg)
 */
const GaugeHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM280 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-18.6-7.9-35.3-20.5-47l82.6-153.4c4.2-7.8 1.3-17.5-6.5-21.7s-17.5-1.3-21.7 6.5L271.3 289.8c-4.9-1.2-10-1.8-15.3-1.8c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zM168 144a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM96 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm344-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default GaugeHigh;