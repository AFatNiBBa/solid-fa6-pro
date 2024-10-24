
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=duotone chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
        <path d="M160 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L160 96zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0z" />
    </Icon>
);

export default ChartBar;