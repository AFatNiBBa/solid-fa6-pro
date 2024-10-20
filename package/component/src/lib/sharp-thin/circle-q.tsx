
import { Icon } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=sharp-thin circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 256c0-61.9 50.1-112 112-112s112 50.1 112 112c0 28.3-10.5 54.2-27.9 73.9L273.9 256l-21.5 0 76.4 85.2c-19.6 16.7-45 26.8-72.7 26.8c-61.9 0-112-50.1-112-112zm240 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128c31.9 0 61-11.6 83.4-30.9L367.1 384l21.5 0-37.7-42.1C371.5 319.2 384 289.1 384 256z" />
    </Icon>
);

export default CircleQ;