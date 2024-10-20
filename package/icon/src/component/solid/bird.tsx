
import { Icon } from "../../index";

/**
 * A component that renders the `bird` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=solid bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 192l0-3.6C0 172.7 12.7 160 28.4 160L224 160c17.7 0 32-14.3 32-32l0-32c0-53 43-96 96-96c47.5 0 86.9 34.5 94.6 79.7l57.6 34.6c4.8 2.9 7.8 8.1 7.8 13.7s-2.9 10.8-7.8 13.7L448 175.5l0 16.5c0 93.9-57.7 174.3-139.7 207.6l40.9 77.2c6.2 11.7 1.7 26.2-10 32.4s-26.2 1.7-32.4-10l-45.7-86.3C249 415 236.6 416 224 416c-1 0-2 0-3 0l32.2 60.8c6.2 11.7 1.7 26.2-10 32.4s-26.2 1.7-32.4-10l-48.6-91.9C68.5 380.5 0 294.3 0 192zm376-72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Bird;