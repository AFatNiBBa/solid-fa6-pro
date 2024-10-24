
import { Icon } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=regular chart-area}
 * @preview ![chart-area](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-area.svg)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56L0 408c0 39.8 32.2 72 72 72l416 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 432c-13.3 0-24-10.7-24-24L48 56zM286.1 225.9c9 9 21.2 14.1 33.9 14.1s24.9-5.1 33.9-14.1l27.3-27.3L432 257.8l0 78.2-288 0 0-92.1 80-80 62.1 62.1zM320 192l-33.9-33.9-39.4-39.4c-12.5-12.5-32.8-12.5-45.3 0l-91.3 91.3c-9 9-14.1 21.2-14.1 33.9L96 352c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-94.2c0-11.5-4.1-22.5-11.6-31.2l-62-72.3c-12.1-14.2-33.7-15-46.9-1.8l-5.6 5.6L320 192z" />
    </Icon>
);

export default ChartArea;