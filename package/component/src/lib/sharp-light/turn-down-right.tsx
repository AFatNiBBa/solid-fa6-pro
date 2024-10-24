
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=sharp-light turn-down-right}
 * @preview ![turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/turn-down-right.svg)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 256l-32 0-192 0-32 0 0-32L96 64 32 64l0 256 288 0 32 0 0 32 0 50.7L466.7 288 352 173.3l0 50.7 0 32zm-32-96l0-32 32 0L489.4 265.4 512 288l-22.6 22.6L352 448l-32 0 0-32 0-32 0-32-32 0L32 352 0 352l0-32L0 64 0 32l32 0 64 0 32 0 0 32 0 128 0 32 32 0 128 0 32 0 0-32 0-32z" />
    </Icon>
);

export default TurnDownRight;