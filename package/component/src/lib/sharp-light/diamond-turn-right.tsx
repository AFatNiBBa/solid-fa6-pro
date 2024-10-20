
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-turn-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-turn-right?s=sharp-light diamond-turn-right}
 * @preview ![diamond-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/diamond-turn-right.svg)
 */
const DiamondTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M22.6 278.6L0 256l22.6-22.6L233.4 22.6 256 0l22.6 22.6L489.4 233.4 512 256l-22.6 22.6L278.6 489.4 256 512l-22.6-22.6L22.6 278.6zM45.3 256L256 466.7 466.7 256 256 45.3 45.3 256zM304 137.4l11.3 11.3 64 64L390.6 224l-11.3 11.3-64 64L304 310.6 281.4 288l11.3-11.3L329.4 240 208 240l0 80 0 16-32 0 0-16 0-96 0-16 16 0 137.4 0-36.7-36.7L281.4 160 304 137.4z" />
    </Icon>
);

export default DiamondTurnRight;