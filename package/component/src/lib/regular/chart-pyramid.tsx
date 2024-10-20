
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=regular chart-pyramid}
 * @preview ![chart-pyramid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-pyramid.svg)
 */
const ChartPyramid: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 95.8L199.9 192l112.3 0L256 95.8zM125.2 320l261.6 0-46.7-80-168.3 0-46.7 80zm-28 48L59.9 432l392.3 0-37.3-64L97.2 368zM214.5 71.6c18.5-31.8 64.4-31.8 82.9 0L493.6 407.8c18.7 32-4.4 72.2-41.5 72.2L59.9 480c-37 0-60.1-40.2-41.5-72.2L214.5 71.6z" />
    </Icon>
);

export default ChartPyramid;