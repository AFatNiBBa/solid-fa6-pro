
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-dashed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dashed?s=duotone circle-dashed}
 * @preview ![circle-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-dashed.svg)
 */
const CircleDashed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.1 280C6 332.7 26.9 380.7 58.8 419.3l45.5-45.5C83.7 347.2 69.9 315.1 65.5 280L1.1 280zM92.7 58.8l45.5 45.5c26.6-20.6 58.7-34.5 93.7-38.8l0-64.4C179.3 6 131.3 26.9 92.7 58.8zM280 446.5l0 64.4c52.7-4.9 100.7-25.8 139.3-57.7l-45.5-45.5c-26.6 20.6-58.7 34.5-93.7 38.8zM407.7 138.3c20.6 26.6 34.5 58.7 38.8 93.7l64.4 0c-4.9-52.7-25.8-100.7-57.7-139.3l-45.5 45.5z" />
        <path d="M1.1 232C6 179.3 26.9 131.3 58.8 92.7l45.5 45.5C83.7 164.8 69.9 196.9 65.5 232L1.1 232zM407.7 373.7c20.6-26.6 34.5-58.7 38.8-93.7l64.4 0c-4.9 52.7-25.8 100.7-57.7 139.3l-45.5-45.5zM92.7 453.2l45.5-45.5c26.6 20.6 58.7 34.5 93.7 38.8l0 64.4c-52.7-4.9-100.7-25.8-139.3-57.7zM419.3 58.8l-45.5 45.5C347.2 83.7 315.1 69.9 280 65.5l0-64.4C332.7 6 380.7 26.9 419.3 58.8z" />
    </Icon>
);

export default CircleDashed;