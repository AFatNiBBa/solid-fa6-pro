
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-bracket?s=duotone arrow-down-to-bracket}
 * @preview ![arrow-down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-to-bracket.svg)
 */
const ArrowDownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
    </Icon>
);

export default ArrowDownToBracket;