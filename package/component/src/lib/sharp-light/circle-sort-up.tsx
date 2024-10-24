
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-up?s=sharp-light circle-sort-up}
 * @preview ![circle-sort-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-sort-up.svg)
 */
const CircleSortUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176-32l-32 0 0-32L256 96l112 96 0 32-32 0-160 0zm142.8-32L256 138.1 193.2 192l125.7 0zM244.7 403.3l-88-88L145.4 304 168 281.4l11.3 11.3L256 369.4l76.7-76.7L344 281.4 366.6 304l-11.3 11.3-88 88L256 414.6l-11.3-11.3z" />
    </Icon>
);

export default CircleSortUp;