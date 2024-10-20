
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-from-bracket?s=sharp-duotone-solid arrow-right-from-bracket}
 * @preview ![arrow-right-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-from-bracket.svg)
 */
const ArrowRightFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 128 0 32 0 0-64-32 0-96 0L64 96l96 0 32 0 0-64-32 0L32 32 0 32z" />
        <path d="M509.3 256l-22.6 22.6-128 128L336 429.3 290.7 384l22.6-22.6L386.7 288 192 288l-32 0 0-64 32 0 194.7 0-73.4-73.4L290.7 128 336 82.7l22.6 22.6 128 128L509.3 256z" />
    </Icon>
);

export default ArrowRightFromBracket;