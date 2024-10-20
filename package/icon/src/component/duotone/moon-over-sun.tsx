
import { Icon, generic } from "../../index";

/**
 * A component that renders the `moon-over-sun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=duotone moon-over-sun}
 * @preview ![moon-over-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/moon-over-sun.svg)
 */
const MoonOverSun: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.2 150.5c-2.1 5-1.5 10.7 1.6 15.2L65.1 256 2.8 346.3c-3.1 4.5-3.7 10.2-1.6 15.2s6.6 8.6 11.9 9.6L121 391l19.8 107.9c1 5.3 4.6 9.8 9.6 11.9s10.7 1.5 15.2-1.6L256 446.9l90.3 62.3c4.5 3.1 10.2 3.7 15.2 1.6s8.6-6.6 9.6-11.9L391 391l107.9-19.8c5.3-1 9.8-4.6 11.9-9.6s1.5-10.7-1.6-15.2L446.9 256l62.3-90.3c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L391 121 371.1 13.1c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L256 65.1 165.7 2.8c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L121 121 13.1 140.9c-5.3 1-9.8 4.6-11.9 9.6zM400 256a144 144 0 1 1 -288 0 144 144 0 1 1 288 0z" />
        <path d="M257 142c-63.4 0-115 50.9-115 114s51.6 114 115 114c31.1 0 59.4-12.3 80.1-32.2c5.1-4.9 6.4-12.5 3.2-18.7s-10.1-9.7-17-8.6c-4.2 .7-8.5 1.1-13 1.1c-41.8 0-75.4-33.5-75.4-74.5c0-27.7 15.3-52 38.3-64.8c6.1-3.4 9.3-10.5 7.8-17.4s-7.3-12-14.3-12.6c-3.2-.3-6.5-.4-9.7-.4z" />
    </Icon>
);

export default MoonOverSun;