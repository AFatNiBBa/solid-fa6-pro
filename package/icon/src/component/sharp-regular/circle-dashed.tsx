
import { Icon } from "../../index";

/**
 * A component that renders the `circle-dashed` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dashed?s=sharp-regular circle-dashed}
 * @preview ![circle-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-dashed.svg)
 */
const CircleDashed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M1.1 232l48.3 0c4.5-39.5 20.1-75.6 43.6-105.1L58.8 92.7C26.9 131.3 6 179.3 1.1 232zM126.9 92.9c29.6-23.4 65.7-39 105.1-43.6l0-48.3C179.3 6 131.3 26.9 92.7 58.8l34.1 34.1zM280 462.6l0 48.3c52.7-4.9 100.7-25.8 139.3-57.7l-34.1-34.1c-29.6 23.4-65.7 39-105.1 43.6zm139.1-77.5l34.1 34.1c31.9-38.5 52.8-86.6 57.7-139.3l-48.3 0c-4.5 39.5-20.1 75.6-43.6 105.1zM92.7 453.2c38.5 31.9 86.6 52.8 139.3 57.7l0-48.3c-39.5-4.5-75.6-20.1-105.1-43.6L92.7 453.2zM58.8 419.3l34.1-34.1c-23.4-29.6-39-65.7-43.6-105.1L1.1 280C6 332.7 26.9 380.7 58.8 419.3zM419.3 58.8C380.7 26.9 332.7 6 280 1.1l0 48.3c39.5 4.5 75.6 20.1 105.1 43.6l34.1-34.1zm-.2 68.1c23.4 29.6 39 65.7 43.6 105.1l48.3 0c-4.9-52.7-25.8-100.7-57.7-139.3l-34.1 34.1z" />
    </Icon>
);

export default CircleDashed;