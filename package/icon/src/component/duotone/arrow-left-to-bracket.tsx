
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-bracket?s=duotone arrow-left-to-bracket}
 * @preview ![arrow-left-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-left-to-bracket.svg)
 */
const ArrowLeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128z" />
        <path d="M169.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-210.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
    </Icon>
);

export default ArrowLeftToBracket;