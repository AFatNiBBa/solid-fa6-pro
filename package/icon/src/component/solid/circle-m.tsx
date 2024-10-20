
import { Icon } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=solid circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM171.5 137.9L256 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-133.8-60.5 83.8c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L176 226.2 176 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.4 6.7-19.6 16.6-22.8s20.7 .3 26.8 8.8z" />
    </Icon>
);

export default CircleM;