
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-line-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up?s=duotone chart-line-up}
 * @preview ![chart-line-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-line-up.svg)
 */
const ChartLineUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
        <path d="M406.6 246.6L439 279c15.1 15.1 41 4.4 41-17L480 152c0-13.3-10.7-24-24-24l-110.1 0c-21.4 0-32.1 25.9-17 41l32.4 32.4L304 258.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L208 253.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0l80-80z" />
    </Icon>
);

export default ChartLineUp;