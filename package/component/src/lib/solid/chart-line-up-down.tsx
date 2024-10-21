
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-up-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up-down?s=solid chart-line-up-down}
 * @preview ![chart-line-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-line-up-down.svg)
 */
const ChartLineUpDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm313.4 57.4L288 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L208 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l112-112 18.7 18.7c4.2 4.2 10 6.6 16 6.6c12.5 0 22.6-10.1 22.6-22.6l0-73.2 0-.3L480 80c0-8.8-7.2-16-16-16l-89.4 0C362.1 64 352 74.1 352 86.6c0 6 2.4 11.8 6.6 16l18.7 18.7zm64 141.3l-18.7 18.7-34.7-34.7-45.3 45.3 34.7 34.7-18.7 18.7c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6l89.4 0c8.8 0 16-7.2 16-16l0-89.4c0-12.5-10.1-22.6-22.6-22.6c-6 0-11.8 2.4-16 6.6z" />
    </Icon>
);

export default ChartLineUpDown;