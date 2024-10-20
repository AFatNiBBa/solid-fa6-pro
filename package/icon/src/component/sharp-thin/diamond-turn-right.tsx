
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-turn-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-turn-right?s=sharp-thin diamond-turn-right}
 * @preview ![diamond-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/diamond-turn-right.svg)
 */
const DiamondTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M11.3 267.3L0 256l11.3-11.3L244.7 11.3 256 0l11.3 11.3L500.7 244.7 512 256l-11.3 11.3L267.3 500.7 256 512l-11.3-11.3L11.3 267.3zM22.6 256L256 489.4 489.4 256 256 22.6 22.6 256zm287-109.7l72 72 5.7 5.7-5.7 5.7-72 72-5.7 5.7L292.7 296l5.7-5.7L356.7 232 200 232l0 96 0 8-16 0 0-8 0-104 0-8 8 0 164.7 0-58.3-58.3-5.7-5.7L304 140.7l5.7 5.7z" />
    </Icon>
);

export default DiamondTurnRight;