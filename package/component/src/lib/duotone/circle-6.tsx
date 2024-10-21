
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=duotone circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160 32c0-32.4 14.2-63.2 38.8-84.3c27.2-23.3 54.4-46.6 81.6-70c4.5-3.9 10.1-5.8 15.6-5.8c6.8 0 13.5 2.8 18.2 8.4c8.6 10.1 7.5 25.2-2.6 33.8c-9.9 8.4-19.7 16.9-29.6 25.4c40.4 11.4 70 48.4 70 92.4c0 53-43 96-96 96s-96-43-96-96zm48 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M311.6 170.2c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6l-81.6 70C174.2 224.8 160 255.6 160 288c0 53 43 96 96 96s96-43 96-96c0-44-29.6-81.1-70-92.4l29.6-25.4zM304 288a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default Circle_6;