
import { Icon } from "../../index";

/**
 * A component that renders the `map-location` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location?s=light map-location}
 * @preview ![map-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/map-location.svg)
 */
const MapLocation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M376 120c0 7.4-2.7 19-9.4 35c-6.5 15.4-15.7 32.4-26.4 49.7c-17.1 27.8-36.9 54.7-52.2 74.4c-15.3-19.7-35.1-46.6-52.2-74.4c-10.7-17.3-19.9-34.3-26.4-49.7c-6.7-15.9-9.4-27.6-9.4-35c0-48.6 39.4-88 88-88s88 39.4 88 88zm32 0C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0C334.9 271.9 408 174.6 408 120zm-4.6 103.6c.9-.2 1.7-.4 2.5-.8L544 167.6l0 253.5L416 472.4 416 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 170.8L192 419.9 192 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 117.2L32 472.4l0-253.5 115.5-46.2c-3.9-10-7.2-20.4-9.2-30.8L15.1 191.1C6 194.8 0 203.6 0 213.4L0 484.2c0 17 17.1 28.6 32.9 22.3l144-57.6 218.7 62.5c3.4 1 7 .8 10.3-.5l155-62c9.1-3.6 15.1-12.5 15.1-22.3l0-270.8c0-17-17.1-28.6-32.9-22.3L425.2 180.7c-6.1 14.2-13.6 28.8-21.8 42.9z" />
    </Icon>
);

export default MapLocation;