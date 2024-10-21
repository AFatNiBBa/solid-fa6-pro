
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-simple-high` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple-high?s=sharp-regular gauge-simple-high}
 * @preview ![gauge-simple-high](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gauge-simple-high.svg)
 */
const GaugeSimpleHigh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm56-160c0-14-5.1-26.8-13.7-36.6L366 161.7l9.7-22-43.9-19.3-9.7 22L254.4 296c-30.2 .8-54.4 25.6-54.4 56c0 30.9 25.1 56 56 56s56-25.1 56-56z" />
    </Icon>
);

export default GaugeSimpleHigh;