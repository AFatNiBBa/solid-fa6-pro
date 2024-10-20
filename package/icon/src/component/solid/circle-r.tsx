
import { Icon } from "../../index";

/**
 * A component that renders the `circle-r` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-r?s=solid circle-r}
 * @preview ![circle-r](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-r.svg)
 */
const CircleR: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l104 0c44.2 0 80 35.8 80 80c0 36.6-24.6 67.5-58.2 77l45.4 60.6c8 10.6 5.8 25.6-4.8 33.6s-25.6 5.8-33.6-4.8L252 288l-44 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112c0-13.3 10.7-24 24-24zm80 112l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0 64 56 0z" />
    </Icon>
);

export default CircleR;