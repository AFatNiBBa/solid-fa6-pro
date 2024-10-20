
import { Icon } from "../../index";

/**
 * A component that renders the `circle-r` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-r?s=light circle-r}
 * @preview ![circle-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-r.svg)
 */
const CircleR: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 128c-17.7 0-32 14.3-32 32l0 112 0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 71.4 0 59.3 88.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-50.5-75.7c31-11 53.2-40.6 53.2-75.4c0-44.2-35.8-80-80-80l-80 0zm80 128l-80 0 0-96 80 0c26.5 0 48 21.5 48 48s-21.5 48-48 48z" />
    </Icon>
);

export default CircleR;