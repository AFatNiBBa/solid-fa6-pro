
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-music?s=duotone magnifying-glass-music}
 * @preview ![magnifying-glass-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/magnifying-glass-music.svg)
 */
const MagnifyingGlassMusic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm112 64c0-26.5 28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-57.5 0-32c0-10.3 6.6-19.5 16.4-22.8l48-16c2.5-.8 5-1.2 7.6-1.2c5 0 9.9 1.5 14 4.5c6.3 4.5 10 11.8 10 19.5l0 32c0 10.3-6.6 19.5-16.4 22.8L240 185.3l0 86.8c-.1 26.5-28.7 47.9-64 47.9c-35.3 0-64-21.5-64-48z" />
        <path d="M278 100.5c6.3 4.5 10 11.8 10 19.5l0 32c0 10.3-6.6 19.5-16.4 22.8L240 185.3l0 86.7c0 0 0 .1 0 .1c-.1 26.5-28.7 47.9-64 47.9c-35.3 0-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-57.5 0-32c0-10.3 6.6-19.5 16.4-22.8l48-16c7.3-2.4 15.4-1.2 21.6 3.3zM457.4 502.6L330.7 376C348 363.3 363.3 348 376 330.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" />
    </Icon>
);

export default MagnifyingGlassMusic;