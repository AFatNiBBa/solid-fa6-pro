
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-left?s=sharp-thin circle-down-left}
 * @preview ![circle-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-down-left.svg)
 */
const CircleDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zm0 496A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm60.7-179.3L328 344l-11.3 11.3L304 368l-144 0-16 0 0-16 0-144 12.7-12.7L168 184l11.3 11.3 25.4 25.4L216 232l11.3-11.3 73.4-73.4L312 136l11.3 11.3 41.4 41.4L376 200l-11.3 11.3-73.4 73.4L280 296l11.3 11.3 25.4 25.4zm-48-48L353.4 200 312 158.6l-84.7 84.7L216 254.6l-11.3-11.3L168 206.6l-8 8L160 352l137.4 0 8-8-36.7-36.7L257.4 296l11.3-11.3z" />
    </Icon>
);

export default CircleDownLeft;