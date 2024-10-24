
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-down?s=sharp-light circle-sort-down}
 * @preview ![circle-sort-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-sort-down.svg)
 */
const CircleSortDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM176 288l-32 0 0 32 112 96 112-96 0-32-32 0-160 0zm142.8 32L256 373.9 193.2 320l125.7 0zM244.7 108.7l-88 88L145.4 208 168 230.6l11.3-11.3L256 142.6l76.7 76.7L344 230.6 366.6 208l-11.3-11.3-88-88L256 97.4l-11.3 11.3z" />
    </Icon>
);

export default CircleSortDown;