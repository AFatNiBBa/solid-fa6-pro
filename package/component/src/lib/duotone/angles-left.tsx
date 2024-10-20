
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-left?s=duotone angles-left}
 * @preview ![angles-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/angles-left.svg)
 */
const AnglesLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 256c0 8.2 3.1 16.4 9.4 22.6l160 160c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4s9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6L301.3 256 438.6 118.6c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6S424.2 64 416 64s-16.4 3.1-22.6 9.4l-160 160c-6.2 6.2-9.4 14.4-9.4 22.6z" />
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </Icon>
);

export default AnglesLeft;