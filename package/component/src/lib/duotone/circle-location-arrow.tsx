
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=duotone circle-location-arrow}
 * @preview ![circle-location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-location-arrow.svg)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm120.2-1.2c.2-1 .4-2.1 .7-3.1c.6-2 1.5-4 2.7-5.7c2.3-3.5 5.6-6.4 9.7-8.2c65.4-28 130.7-56 196-84c8.5-3.5 18-1.7 24.2 4.7c6.4 6.3 8.2 15.9 4.7 24.2c-28 65.3-56 130.7-84 196c-3.5 8.1-11.4 13.3-20.2 13.3c-1.4 0-2.9-.1-4.4-.4c-5.1-1-9.5-3.8-12.6-7.7c-1.6-1.9-2.8-4.1-3.7-6.4c-.4-1.2-.8-2.4-1-3.6c-.1-.6-.2-1.3-.3-1.9s-.1-1.2-.1-1.9c0-30 0-60 0-90l-90 0c-10.4 0-19.4-7.4-21.6-17.6c-.2-1.1-.4-2.2-.3-2.1c-.1-1.1-.1-1.1-.1-2.3c0-1.1 0-1.3 .1-1.6c0-.5 .1-1 .2-1.6z" />
        <path d="M274.2 378.7l84-196c3.6-8.3 1.7-17.9-4.7-24.2c-6.3-6.3-15.8-8.2-24.2-4.7l-196 84c-9.6 4.1-15 14.5-12.9 24.6c2.1 10.2 11.1 17.6 21.5 17.6h90v90c0 10.4 7.4 19.5 17.6 21.6c1.5 .3 2.9 .4 4.4 .4c8.8 0 16.7-5.2 20.2-13.3z" />
    </Icon>
);

export default CircleLocationArrow;