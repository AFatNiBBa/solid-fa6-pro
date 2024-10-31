
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-q` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-q?s=duotone circle-q}
 * @preview ![circle-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-q.svg)
 */
const CircleQ: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0c0-70.7 57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9L377 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15.1-15.1c-20.5 14-45.3 22.1-71.9 22.1c-70.7 0-128-57.3-128-128zm48 0c0 44.2 35.8 80 80 80c13.4 0 25.9-3.3 37-9.1l-30-30c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l30 30c5.8-11.1 9.1-23.7 9.1-37c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
        <path d="M256 176c44.2 0 80 35.8 80 80c0 13.4-3.3 25.9-9.1 37l-30-30c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l30 30c-11.1 5.8-23.7 9.1-37 9.1c-44.2 0-80-35.8-80-80s35.8-80 80-80zM361.9 327.9c14-20.5 22.1-45.3 22.1-71.9c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128c26.7 0 51.4-8.2 71.9-22.1L343 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-15.1-15.1z" />
    </Icon>
);

export default CircleQ;