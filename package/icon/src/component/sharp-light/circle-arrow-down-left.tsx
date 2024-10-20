
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-left?s=sharp-light circle-arrow-down-left}
 * @preview ![circle-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-arrow-down-left.svg)
 */
const CircleArrowDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 480A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM176 352l-16 0 0-16 0-144 0-16 32 0 0 16 0 105.4L324.7 164.7 336 153.4 358.6 176l-11.3 11.3L214.6 320l97.4 0 16 0 0 32-16 0-136 0z" />
    </Icon>
);

export default CircleArrowDownLeft;