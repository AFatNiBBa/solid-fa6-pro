
import { Icon } from "../../index";

/**
 * A component that renders the `circle-f` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=sharp-thin circle-f}
 * @preview ![circle-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-f.svg)
 */
const CircleF: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 128l-8 0 0 8 0 112 0 128 0 8 16 0 0-8 0-120 136 0 8 0 0-16-8 0-136 0 0-96 168 0 8 0 0-16-8 0-176 0z" />
    </Icon>
);

export default CircleF;