
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-extinguisher` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-extinguisher?s=duotone fire-extinguisher}
 * @preview ![fire-extinguisher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fire-extinguisher.svg)
 */
const FireExtinguisher: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.5 159.5c-5.8 11.9-.9 26.3 11.1 32.1s26.3 .9 32.1-11.1C62 146.9 91.8 121.1 128 110l0-49.6C72.7 72.6 26.7 109.8 2.5 159.5zM64 416c0 10.7 0 21.3 0 32c0 35.3 28.7 64 64 64l96 0c35.3 0 64-28.7 64-64c0-10.7 0-21.3 0-32L64 416zM224 56c0 16 0 32 0 48l65 0c-.3-1.3-.6-2.6-.8-3.9c-.1-.7-.1-1.3-.2-2c0-.7-.1-1.4-.1-2.1c0-10.7 0-21.3 0-32c0-.7 0-1.4 .1-2s.1-1.4 .2-2c.2-1.3 .4-2.6 .8-3.9l-65 0z" />
        <path d="M500.3 7.3C507.7 13.3 512 22.4 512 32l0 96c0 9.6-4.3 18.7-11.7 24.7s-17.2 8.5-26.6 6.6l-160-32c-15-3-25.7-16.1-25.7-31.4l0-32c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM128 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 106.8c37.8 18 64 56.5 64 101.2l0 176L64 416l0-176c0-44.7 26.2-83.2 64-101.2L128 32zm48 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default FireExtinguisher;