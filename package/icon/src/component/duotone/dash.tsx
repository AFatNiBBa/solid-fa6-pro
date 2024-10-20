
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dash?s=duotone dash}
 * @preview ![dash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dash.svg)
 */
const Dash: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0-17.7 14.3-32 32-32l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Dash;