
import { Icon } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=sharp-light turn-right}
 * @preview ![turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/turn-right.svg)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 256l-32 0-192 0-32 0 0 32 0 160-64 0 0-256 288 0 32 0 0-32 0-50.7L466.7 224 352 338.7l0-50.7 0-32zm-32 96l0 32 32 0L489.4 246.6 512 224l-22.6-22.6L352 64l-32 0 0 32 0 32 0 32-32 0L32 160 0 160l0 32L0 448l0 32 32 0 64 0 32 0 0-32 0-128 0-32 32 0 128 0 32 0 0 32 0 32z" />
    </Icon>
);

export default TurnRight;