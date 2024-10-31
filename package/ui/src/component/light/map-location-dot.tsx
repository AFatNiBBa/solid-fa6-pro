
import { Icon } from "../../index";

/**
 * A component that renders the `map-location-dot` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location-dot?s=light map-location-dot}
 * @preview ![map-location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/map-location-dot.svg)
 */
const MapLocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M366.6 155c6.7-15.9 9.4-27.6 9.4-35c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 7.4 2.7 19 9.4 35c6.5 15.4 15.7 32.4 26.4 49.7c17.1 27.8 36.9 54.7 52.2 74.4c15.3-19.7 35.1-46.6 52.2-74.4c10.7-17.3 19.9-34.3 26.4-49.7zM302.8 312c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120c0 54.6-73.1 151.9-105.2 192zm103.1-89.1c-.8 .3-1.7 .6-2.5 .8c8.2-14.2 15.7-28.7 21.8-42.9l117.9-47.2c15.8-6.3 32.9 5.3 32.9 22.3l0 270.8c0 9.8-6 18.6-15.1 22.3l-155 62c-3.3 1.3-6.9 1.5-10.3 .5L176.9 448.9l-144 57.6C17.1 512.8 0 501.2 0 484.2L0 213.4c0-9.8 6-18.6 15.1-22.3l123.2-49.3c2.1 10.4 5.4 20.8 9.2 30.8L32 218.8l0 253.5 128-51.2L160 304c0-8.8 7.2-16 16-16s16 7.2 16 16l0 115.9 192 54.9L384 304c0-8.8 7.2-16 16-16s16 7.2 16 16l0 168.4 128-51.2 0-253.5L405.9 222.9zM288 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default MapLocationDot;