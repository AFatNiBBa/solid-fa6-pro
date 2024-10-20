
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=duotone circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM144 360c0-5.5 1.9-11 5.7-15.5c25-29.5 49.9-59 74.9-88.5l-74.9-88.5c-8.6-10.1-7.3-25.3 2.8-33.8c4.5-3.8 10-5.7 15.5-5.7c6.8 0 13.6 2.9 18.3 8.5c23.2 27.5 46.5 54.9 69.7 82.3c23.2-27.5 46.5-54.9 69.7-82.3c4.7-5.6 11.5-8.5 18.3-8.5c5.5 0 11 1.9 15.5 5.7c10.1 8.6 11.4 23.7 2.8 33.8c-25 29.5-49.9 59-74.9 88.5c25 29.5 49.9 59 74.9 88.5c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8c-23.2-27.5-46.5-54.9-69.7-82.3c-23.2 27.5-46.5 54.9-69.7 82.3c-8.6 10.1-23.7 11.4-33.8 2.8c-5.6-4.7-8.5-11.5-8.5-18.3z" />
        <path d="M152.5 133.7c10.1-8.6 25.3-7.3 33.8 2.8L256 218.8l69.7-82.3c8.6-10.1 23.7-11.4 33.8-2.8s11.4 23.7 2.8 33.8L287.4 256l74.9 88.5c8.6 10.1 7.3 25.3-2.8 33.8s-25.3 7.3-33.8-2.8L256 293.2l-69.7 82.3c-8.6 10.1-23.7 11.4-33.8 2.8s-11.4-23.7-2.8-33.8L224.6 256l-74.9-88.5c-8.6-10.1-7.3-25.3 2.8-33.8z" />
    </Icon>
);

export default CircleX;