
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=thin chart-line-down}
 * @preview ![chart-line-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-line-down.svg)
 */
const ChartLineDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 408c0 39.8 32.2 72 72 72l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 464c-30.9 0-56-25.1-56-56L16 40zM352 352l120 0c4.4 0 8-3.6 8-8l0-120c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 100.7L293.7 154.3c-3.1-3.1-8.2-3.1-11.3 0L192 244.7l-90.3-90.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l96 96c3.1 3.1 8.2 3.1 11.3 0L288 171.3 452.7 336 352 336c-4.4 0-8 3.6-8 8s3.6 8 8 8z" />
    </Icon>
);

export default ChartLineDown;