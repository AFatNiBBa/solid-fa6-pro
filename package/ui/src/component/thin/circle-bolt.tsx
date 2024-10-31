
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bolt` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=thin circle-bolt}
 * @preview ![circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-bolt.svg)
 */
const CircleBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm267.6-23.2L320 128 160 256l70.1 0c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6 .7 15.6L192 384 352 256l-70.1 0c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6zm66.7-97.7L289.9 224l-8 16 17.9 0 52.2 0c6.8 0 12.9 4.3 15.1 10.7s.2 13.5-5.1 17.8l-160 128c-5.9 4.7-14.2 4.7-20.1-.1s-7.6-12.9-4.3-19.6L222.1 288l8-16-17.9 0L160 272c-6.8 0-12.8-4.3-15.1-10.7s-.2-13.5 5.1-17.8l160-128c5.9-4.7 14.2-4.7 20.1 .1s7.6 12.9 4.2 19.6z" />
    </Icon>
);

export default CircleBolt;