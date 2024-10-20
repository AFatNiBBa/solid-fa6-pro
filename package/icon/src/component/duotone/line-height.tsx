
import { Icon, generic } from "../../index";

/**
 * A component that renders the `line-height` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-height?s=duotone line-height}
 * @preview ![line-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/line-height.svg)
 */
const LineHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 96c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32z" />
        <path d="M73.4 41.4c12.5-12.5 32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-9.4-9.4 0 229.5 9.4-9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l9.4 9.4 0-229.5-9.4 9.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64z" />
    </Icon>
);

export default LineHeight;