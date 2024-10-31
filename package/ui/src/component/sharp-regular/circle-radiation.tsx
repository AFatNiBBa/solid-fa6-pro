
import { Icon } from "../../index";

/**
 * A component that renders the `circle-radiation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-radiation?s=sharp-regular circle-radiation}
 * @preview ![circle-radiation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-radiation.svg)
 */
const CircleRadiation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM200 256c0-20.7 11.3-38.8 28-48.5l-52-90.1C128.2 145.1 96 196.8 96 256l104 0zm28 48.5l-52 90.1c23.5 13.6 50.9 21.4 80 21.4s56.5-7.8 80-21.4l-52-90.1c-8.2 4.8-17.8 7.5-28 7.5s-19.8-2.7-28-7.5zM312 256l104 0c0-59.2-32.2-110.9-80-138.6l-52 90.1c16.7 9.7 28 27.8 28 48.5zm-56 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CircleRadiation;