
import { Icon } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=regular circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 256c0-44.2 35.8-80 80-80s80 35.8 80 80c0 13.4-3.3 25.9-9.1 37l-30-30c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l30 30c-11.1 5.8-23.7 9.1-37 9.1c-44.2 0-80-35.8-80-80zm208 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128c26.7 0 51.4-8.2 71.9-22.1L343 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-15.1-15.1c14-20.5 22.1-45.3 22.1-71.9z" />
    </Icon>
);

export default CircleQ;