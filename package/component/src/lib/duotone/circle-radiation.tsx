
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-radiation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-radiation?s=duotone circle-radiation}
 * @preview ![circle-radiation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-radiation.svg)
 */
const CircleRadiation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm448 0A192 192 0 1 1 64 256a192 192 0 1 1 384 0zm-224 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M200 256c0-20.7 11.3-38.8 28-48.5l-36-62.3c-8.8-15.3-28.7-20.8-42-9c-25.6 22.6-43.9 53.3-50.9 88.1C95.7 241.5 110.3 256 128 256l72 0zm28 48.5l-36 62.4c-8.8 15.3-3.6 35.2 13.1 40.8c16 5.4 33.1 8.3 50.9 8.3s34.9-2.9 50.9-8.3c16.7-5.6 21.9-25.5 13.1-40.8l-36-62.4c-8.2 4.8-17.8 7.5-28 7.5s-19.8-2.7-28-7.5zM312 256l72 0c17.7 0 32.3-14.5 28.8-31.8c-7-34.8-25.3-65.5-50.9-88.1c-13.2-11.7-33.1-6.3-42 9l-36 62.3c16.7 9.7 28 27.8 28 48.5z" />
    </Icon>
);

export default CircleRadiation;