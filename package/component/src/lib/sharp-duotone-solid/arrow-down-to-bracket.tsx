
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-bracket?s=sharp-duotone-solid arrow-down-to-bracket}
 * @preview ![arrow-down-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-to-bracket.svg)
 */
const ArrowDownToBracket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96L64 448l0-96 0-32L0 320z" />
        <path d="M224 365.3l22.6-22.6 128-128L397.3 192 352 146.7l-22.6 22.6L256 242.7 256 32l0-32L192 0l0 32 0 210.7-73.4-73.4L96 146.7 50.7 192l22.6 22.6 128 128L224 365.3z" />
    </Icon>
);

export default ArrowDownToBracket;