
import { Icon } from "../../index";

/**
 * A component that renders the `circle-g` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-g?s=solid circle-g}
 * @preview ![circle-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-g.svg)
 */
const CircleG: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 256c0 44.2 35.8 80 80 80c35.8 0 66.1-23.5 76.3-56L280 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c13.3 0 24 10.7 24 24c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6c9.9 8.8 10.7 24 1.9 33.9s-24 10.7-33.9 1.9C295.2 183.7 276.5 176 256 176c-44.2 0-80 35.8-80 80z" />
    </Icon>
);

export default CircleG;