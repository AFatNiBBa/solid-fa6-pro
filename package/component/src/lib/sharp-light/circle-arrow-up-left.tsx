
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=sharp-light circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-arrow-up-left.svg)
 */
const CircleArrowUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 160l-16 0 0 16 0 144 0 16 32 0 0-16 0-105.4L324.7 347.3 336 358.6 358.6 336l-11.3-11.3L214.6 192l97.4 0 16 0 0-32-16 0-136 0z" />
    </Icon>
);

export default CircleArrowUpLeft;