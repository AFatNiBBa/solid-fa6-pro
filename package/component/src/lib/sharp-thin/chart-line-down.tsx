
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-down?s=sharp-thin chart-line-down}
 * @preview ![chart-line-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-line-down.svg)
 */
const ChartLineDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40l0-8L0 32l0 8L0 472l0 8 8 0 496 0 8 0 0-16-8 0L16 464 16 40zM352 352l120 0 8 0 0-8 0-120 0-8-16 0 0 8 0 100.7L293.7 154.3l-5.7-5.7-5.7 5.7L192 244.7l-90.3-90.3L96 148.7 84.7 160l5.7 5.7 96 96 5.7 5.7 5.7-5.7L288 171.3 452.7 336 352 336l-8 0 0 16 8 0z" />
    </Icon>
);

export default ChartLineDown;