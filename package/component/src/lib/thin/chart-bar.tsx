
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=thin chart-bar}
 * @preview ![chart-bar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-bar.svg)
 */
const ChartBar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 408c0 39.8 32.2 72 72 72l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 464c-30.9 0-56-25.1-56-56L16 40zm96 104c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 96c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-256 0c-8.8 0-16-7.2-16-16zm16-224c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0z" />
    </Icon>
);

export default ChartBar;