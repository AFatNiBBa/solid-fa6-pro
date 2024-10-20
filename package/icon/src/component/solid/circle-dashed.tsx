
import { Icon } from "../../index";

/**
 * A component that renders the `circle-dashed` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dashed?s=solid circle-dashed}
 * @preview ![circle-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-dashed.svg)
 */
const CircleDashed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M1.1 232C6 179.3 26.9 131.3 58.8 92.7l45.5 45.5C83.7 164.8 69.9 196.9 65.5 232L1.1 232zM138.3 104.3L92.7 58.8C131.3 26.9 179.3 6 232 1.1l0 64.4c-35.1 4.4-67.2 18.2-93.7 38.8zM280 446.5c35.1-4.4 67.2-18.2 93.7-38.8l45.5 45.5C380.7 485.1 332.7 506 280 510.9l0-64.4zm127.7-72.8c20.6-26.6 34.5-58.7 38.8-93.7l64.4 0c-4.9 52.7-25.8 100.7-57.7 139.3l-45.5-45.5zM92.7 453.2l45.5-45.5c26.6 20.6 58.7 34.5 93.7 38.8l0 64.4c-52.7-4.9-100.7-25.8-139.3-57.7zM58.8 419.3C26.9 380.7 6 332.7 1.1 280l64.4 0c4.4 35.1 18.2 67.2 38.8 93.7L58.8 419.3zM419.3 58.8l-45.5 45.5C347.2 83.7 315.1 69.9 280 65.5l0-64.4C332.7 6 380.7 26.9 419.3 58.8zm-11.6 79.5l45.5-45.5c31.9 38.5 52.8 86.6 57.7 139.3l-64.4 0c-4.4-35.1-18.2-67.2-38.8-93.7z" />
    </Icon>
);

export default CircleDashed;