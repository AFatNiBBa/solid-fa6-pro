
import { Icon } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=sharp-light chart-area}
 * @preview ![chart-area](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chart-area.svg)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48l0-16L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-32-16 0L32 448 32 48zm214.6 70.6L224 96l-22.6 22.6L96 224l0 128 0 32 32 0 320 0 32 0 0-32 0-112-75.1-87.6L384 128l-22.7 22.7-18.7 18.7L320 192l-22.6-22.6-50.7-50.7zm96 96l39.6-39.6L448 251.8 448 352l-320 0 0-114.7 96-96 73.4 73.4L320 237.3l22.6-22.6z" />
    </Icon>
);

export default ChartArea;