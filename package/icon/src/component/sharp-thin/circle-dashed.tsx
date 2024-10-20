
import { Icon } from "../../index";

/**
 * A component that renders the `circle-dashed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dashed?s=sharp-thin circle-dashed}
 * @preview ![circle-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-dashed.svg)
 */
const CircleDashed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M1.1 232l16.1 0c4.8-48.3 23.9-92.3 53-127.9L58.8 92.7C26.9 131.3 6 179.3 1.1 232zm103-161.8C139.7 41.1 183.7 22 232 17.2l0-16.1C179.3 6 131.3 26.9 92.7 58.8l11.4 11.4zM280 494.8l0 16.1c52.7-4.9 100.7-25.8 139.3-57.7l-11.4-11.4c-35.6 29.1-79.6 48.2-127.9 53zm161.8-86.9l11.4 11.4c31.9-38.5 52.8-86.6 57.7-139.3l-16.1 0c-4.8 48.3-23.9 92.3-53 127.9zM92.7 453.2c38.5 31.9 86.6 52.8 139.3 57.7l0-16.1c-48.3-4.8-92.3-23.9-127.9-53L92.7 453.2zM58.8 419.3l11.4-11.4C41.1 372.3 22 328.3 17.2 280L1.1 280C6 332.7 26.9 380.7 58.8 419.3zM419.3 58.8C380.7 26.9 332.7 6 280 1.1l0 16.1c48.3 4.8 92.3 23.9 127.9 53l11.4-11.4zm22.6 45.3c29.1 35.6 48.2 79.6 53 127.9l16.1 0c-4.9-52.7-25.8-100.7-57.7-139.3l-11.4 11.4z" />
    </Icon>
);

export default CircleDashed;