
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=solid chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default ChartBar;