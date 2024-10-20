
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bolt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=sharp-light circle-bolt}
 * @preview ![circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-bolt.svg)
 */
const CircleBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM296 112l8 0 18.4 0-2.6 18.3L306.4 224l45.6 0 16 0 0 16 0 8 0 6.6-4.7 4.7-136 136-4.7 4.7-6.6 0-8 0-18.4 0 2.6-18.3L205.6 288 160 288l-16 0 0-16 0-8 0-6.6 4.7-4.7 136-136 4.7-4.7 6.6 0zM190.6 256l33.4 0 18.4 0-2.6 18.3-10.5 73.8L321.4 256 288 256l-18.4 0 2.6-18.3 10.5-73.8L190.6 256z" />
    </Icon>
);

export default CircleBolt;