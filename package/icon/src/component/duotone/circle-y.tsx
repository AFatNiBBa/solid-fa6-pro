
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=duotone circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128.1-90.5c.1-.8 .2-1.7 .4-2.5c.3-1.6 .9-3.3 1.6-4.8c1.4-3.1 3.5-6 6.2-8.3c10-8.7 25.2-7.6 33.9 2.4c28.6 33 57.2 66.1 85.9 99.1c28.6-33 57.2-66.1 85.9-99.1c4.7-5.5 11.4-8.3 18.1-8.3c5.6 0 11.2 1.9 15.7 5.9c5.5 4.7 8.3 11.4 8.3 18.1c0 5.6-1.9 11.2-5.9 15.7C345.4 221.5 312.7 259.2 280 297l0 79c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-2.2-2.2-3.9-4.8-5.1-7.6c-.6-1.4-1.1-2.9-1.4-4.5c-.2-1.2-.4-2.4-.4-2.4c-.1-1.2-.1-1.2-.1-2.5c0-26.4 0-52.7 0-79L133.9 183.7c-2-2.3-3.4-4.8-4.4-7.5c-.5-1.3-.9-2.7-1.1-4.1c-.2-1-.3-2.1-.3-2.1c-.1-1-.1-1-.1-2.1c0-.8 0-1 0-1.3c0-.4 .1-.8 .1-1.2z" />
        <path d="M136.3 149.9c10-8.7 25.2-7.6 33.9 2.4L256 251.4l85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L280 297l0 79c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-79L133.9 183.7c-8.7-10-7.6-25.2 2.4-33.9z" />
    </Icon>
);

export default CircleY;