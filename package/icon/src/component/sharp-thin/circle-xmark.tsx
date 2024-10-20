
import { Icon } from "../../index";

/**
 * A component that renders the `circle-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-xmark?s=sharp-thin circle-xmark}
 * @preview ![circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-xmark.svg)
 */
const CircleXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM185.8 174.5l-11.3 11.3 5.7 5.7L244.7 256l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L256 267.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L267.3 256l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L256 244.7l-64.6-64.6-5.7-5.7z" />
    </Icon>
);

export default CircleXmark;