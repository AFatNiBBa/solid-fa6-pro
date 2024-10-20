
import { Icon } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=sharp-thin chart-area}
 * @preview ![chart-area](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-area.svg)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40l0-8L0 32l0 8L0 472l0 8 8 0 496 0 8 0 0-16-8 0L16 464 16 40zm219.3 67.3L224 96l-11.3 11.3L96 224l0 144 0 16 16 0 352 0 16 0 0-16 0-128-85.6-99.8L384 128l-11.3 11.3-41.3 41.3L320 192l-11.3-11.3-73.4-73.4zm96 96l51.8-51.8L464 245.9 464 368l-352 0 0-137.4 112-112 84.7 84.7L320 214.6l11.3-11.3z" />
    </Icon>
);

export default ChartArea;