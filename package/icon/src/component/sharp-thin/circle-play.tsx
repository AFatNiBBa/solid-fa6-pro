
import { Icon } from "../../index";

/**
 * A component that renders the `circle-play` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-play?s=sharp-thin circle-play}
 * @preview ![circle-play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-play.svg)
 */
const CirclePlay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 374.2L176 384l0-18.8 0-218.4 0-18.8 16 9.8L368.7 246.6 384 256l-15.3 9.4L192 374.2zM353.5 256L192 156.6l0 198.7L353.5 256z" />
    </Icon>
);

export default CirclePlay;