
import { Icon } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=thin circle-location-arrow}
 * @preview ![circle-location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-location-arrow.svg)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm127.7 27c-11.7 0-21.9-8.3-24.2-19.8c-2.4-11.4 3.7-23.1 14.5-27.7L338.5 141c9.5-3.9 20.2-1.9 27.3 5.3c7.2 7.1 9.2 17.8 5.2 27.2L276.5 394c-3.9 9.1-12.9 15-22.8 15c-1.6 0-3.3-.1-4.9-.5C237.3 406.2 229 396 229 384.2l0-85.2 0-16-16 0-85.3 0zm-3.4-32.8s0 0 0 0c-3.8 1.6-5.9 5.8-5.1 9.8c0 0 0 0 0 0c.8 4.1 4.5 7 8.6 7L229 267c8.8 0 16 7.2 16 16l0 101.2c0 4.1 2.9 7.7 6.9 8.6c.5 .1 1.1 .2 1.8 .2c3.5 0 6.7-2.1 8.1-5.3c0 0 0 0 0 0l94.5-220.5s0 0 0 0c1.4-3.4 .7-7.1-1.8-9.6l-.1-.1s0 0 0 0c-2.3-2.4-6-3.3-9.7-1.8L124.3 250.2z" />
    </Icon>
);

export default CircleLocationArrow;