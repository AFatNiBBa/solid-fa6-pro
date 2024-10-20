
import { Icon } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=light circle-location-arrow}
 * @preview ![circle-location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-location-arrow.svg)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm127.7 27c-11.7 0-21.9-8.3-24.2-19.8c-2.4-11.4 3.7-23.1 14.5-27.7L338.5 141c9.5-3.9 20.2-1.9 27.3 5.3c7.2 7.1 9.2 17.8 5.2 27.2L276.5 394c-3.9 9.1-12.9 15-22.8 15c-1.6 0-3.3-.1-4.9-.5C237.3 406.2 229 396 229 384.2l0-69.2 0-32-32 0-69.3 0zm35.3-32l65.9 0c17.7 0 32 14.3 32 32l0 66 73.5-171.4L163.1 251z" />
    </Icon>
);

export default CircleLocationArrow;