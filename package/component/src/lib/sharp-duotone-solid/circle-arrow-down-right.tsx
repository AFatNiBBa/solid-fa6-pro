
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-right?s=sharp-duotone-solid circle-arrow-down-right}
 * @preview ![circle-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-arrow-down-right.svg)
 */
const CircleArrowDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm134.1-88L168 134.1l17 17 135 135L320 184l0-24 48 0 0 24 0 160 0 24-24 0-152 0-24 0 0-48 24 0 94.1 0L151 185l-17-17z" />
        <path d="M368 368l-24 0-152 0-24 0 0-48 24 0 94.1 0L151 185l-17-17L168 134.1l17 17 135 135L320 184l0-24 48 0 0 24 0 160 0 24z" />
    </Icon>
);

export default CircleArrowDownRight;