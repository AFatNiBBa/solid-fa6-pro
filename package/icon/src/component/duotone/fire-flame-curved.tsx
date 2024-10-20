
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-flame-curved` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-flame-curved?s=duotone fire-flame-curved}
 * @preview ![fire-flame-curved](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/fire-flame-curved.svg)
 */
const FireFlameCurved: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 316.2L0 320C0 426 86 512 192 512l17.7 0C306 512 384 434 384 337.7c0-67.5-27.6-132-76.4-178.6L222.9 78.2C213.4 69.1 208 56.6 208 43.5l0-22.1C208 9.6 198.4 0 186.7 0c-6.7 0-13 3.2-17.1 8.5l-16 21.3C137 52 128 79.1 128 106.8c0 33.9 13.5 66.7 37.5 90.7l38.6 38.6c12.7 12.7 19.9 30 19.9 48l0 3.9c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-89.4C96 186.1 85.9 176 73.4 176c-6 0-11.8 2.4-16 6.6l-3.5 3.5C19.4 220.6 0 267.4 0 316.2zM115.4 419.6c0-4.5 5.6-8.8 11.7-7.1c97.6 27.5 182.5-86.7 148.5-179.8c-1.5-4 2.3-8.2 5.7-8.2c1.1 0 2.3 .5 3.1 1.6c25.9 32 35.6 69.8 35.6 111.6C320 398.6 270.6 448 209.7 448L192 448c-27.4 0-52.8-8.6-73.7-23.3c-2.1-1.5-3-3.3-3-5.1z" />
        <path d="M127.1 412.6c-8.6-2.4-16.1 7-8.8 12.1C139.2 439.4 164.6 448 192 448l17.7 0C270.6 448 320 398.6 320 337.7c0-41.8-9.7-79.6-35.6-111.6c-3.6-4.4-10.8 1.4-8.8 6.6c34 93.1-50.9 207.4-148.5 179.8z" />
    </Icon>
);

export default FireFlameCurved;