
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pie` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie?s=sharp-solid chart-pie}
 * @preview ![chart-pie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-pie.svg)
 */
const ChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 240L304 .6c5.3-.4 10.6-.6 16-.6C443.7 0 544 100.3 544 224c0 5.4-.2 10.7-.6 16L304 240zM32 272C32 144.8 130.9 40.8 256 32.5L256 288 425 457c-41.5 34.4-94.8 55-153 55C139.5 512 32 404.6 32 272zm288 16l255.5 0C571 355.9 538.3 416.1 489 457L320 288z" />
    </Icon>
);

export default ChartPie;