
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pie-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie-simple?s=solid chart-pie-simple}
 * @preview ![chart-pie-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-pie-simple.svg)
 */
const ChartPieSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.4 240L272 240l0-223.4c0-9 7-16.6 16-16.6C411.7 0 512 100.3 512 224c0 9-7.6 16-16.6 16zM190.2 37.2c18.1-3.8 33.8 11 33.8 29.5L224 288l221.3 0c18.5 0 33.3 15.7 29.5 33.8C451.9 430.5 355.5 512 240 512C107.5 512 0 404.6 0 272C0 156.5 81.5 60.1 190.2 37.2z" />
    </Icon>
);

export default ChartPieSimple;