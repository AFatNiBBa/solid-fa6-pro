
import { Icon } from "../../index";

/**
 * A component that renders the `circle-g` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-g?s=sharp-thin circle-g}
 * @preview ![circle-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-g.svg)
 */
const CircleG: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 256c0-61.9 50.1-112 112-112c28.7 0 54.8 10.8 74.7 28.5l6 5.3 10.7-11.9-6-5.3C318.7 140.3 288.8 128 256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128l0-8-8 0-85.7 0-8 0 0 16 8 0 77.4 0c-4.1 58.1-52.6 104-111.7 104c-61.9 0-112-50.1-112-112z" />
    </Icon>
);

export default CircleG;