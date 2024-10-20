
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up?s=sharp-solid chart-line-up}
 * @preview ![chart-line-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-line-up.svg)
 */
const ChartLineUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l0-32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-64-32 0L64 416 64 64zm288 64l-32 32 41.4 41.4L304 258.7l-73.4-73.4L208 162.7l-22.6 22.6-80 80 45.3 45.3L208 253.3l73.4 73.4L304 349.3l22.6-22.6 80-80L448 288l32-32 0-128-128 0z" />
    </Icon>
);

export default ChartLineUp;