
import { Icon } from "../../index";

/**
 * A component that renders the `chart-scatter` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter?s=light chart-scatter}
 * @preview ![chart-scatter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chart-scatter.svg)
 */
const ChartScatter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 400c0 44.2 35.8 80 80 80l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 448c-26.5 0-48-21.5-48-48L32 48zM192 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm56-216a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM160 344a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default ChartScatter;