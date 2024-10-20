
import { Icon } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=thin circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM142 130.7c-2.9-3.3-8-3.6-11.3-.7s-3.6 8-.7 11.3L248 275l0 101c0 4.4 3.6 8 8 8s8-3.6 8-8l0-101L382 141.3c2.9-3.3 2.6-8.4-.7-11.3s-8.4-2.6-11.3 .7L256 259.9 142 130.7z" />
    </Icon>
);

export default CircleY;