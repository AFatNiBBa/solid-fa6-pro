
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-play` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-play?s=duotone magnifying-glass-play}
 * @preview ![magnifying-glass-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/magnifying-glass-play.svg)
 */
const MagnifyingGlassPlay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm153.8-64c0-5.7 3.1-11 8-13.9s11.1-2.8 16 0l110.2 64c4.9 2.9 8 8.1 8 13.8s-3 11-8 13.8l-110.2 64c-4.9 2.9-11.1 2.9-16 0s-8-8.1-8-13.9l0-128z" />
        <path d="M161.8 130.1c-5 2.9-8 8.1-8 13.9l0 128c0 5.7 3.1 11 8 13.9s11.1 2.8 16 0l110.2-64c4.9-2.9 8-8.1 8-13.8s-3-11-8-13.8l-110.2-64c-4.9-2.9-11.1-2.9-16 0zM330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z" />
    </Icon>
);

export default MagnifyingGlassPlay;