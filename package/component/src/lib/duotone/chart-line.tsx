
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line?s=duotone chart-line}
 * @preview ![chart-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-line.svg)
 */
const ChartLine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0L240 221.3l-89.4 89.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l112-112c12.5-12.5 32.8-12.5 45.3 0L320 210.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default ChartLine;