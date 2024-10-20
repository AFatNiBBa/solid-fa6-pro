
import { Icon } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=regular circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM171.5 137.9c-6.1-8.4-16.9-12-26.8-8.8s-16.6 12.4-16.6 22.8l0 208c0 13.3 10.7 24 24 24s24-10.7 24-24l0-133.8 60.5 83.8c4.5 6.2 11.7 9.9 19.5 9.9s14.9-3.7 19.5-9.9L336 226.2 336 360c0 13.3 10.7 24 24 24s24-10.7 24-24l0-208c0-10.4-6.7-19.6-16.6-22.8s-20.7 .3-26.8 8.8L256 255 171.5 137.9z" />
    </Icon>
);

export default CircleM;