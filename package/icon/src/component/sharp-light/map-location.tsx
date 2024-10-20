
import { Icon } from "../../index";

/**
 * A component that renders the `map-location` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location?s=sharp-light map-location}
 * @preview ![map-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/map-location.svg)
 */
const MapLocation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M376 120c0 9.7-4.6 25.4-15.2 46.2c-10.2 20-24.1 41.3-38.6 61.2c-12 16.5-24.1 31.7-34.1 43.7c-10-12-22.1-27.2-34.1-43.7c-14.5-19.9-28.4-41.2-38.6-61.2C204.6 145.4 200 129.7 200 120c0-48.6 39.4-88 88-88s88 39.4 88 88zm32 0C408 53.7 354.3 0 288 0S168 53.7 168 120c0 51.3 64.4 134.7 98.8 175.7C279.4 310.7 288 320 288 320s8.6-9.3 21.2-24.3C343.6 254.7 408 171.3 408 120zm-7.4 105.5l.5 .2 9.8-3.5L544 173.7l0 251.9L416 472.1 416 288l-32 0 0 186.1L192 419.3 192 288l-32 0 0 131.8L32 466.3l0-251.9 115.7-42.1c-4-10-7.3-20.3-9.4-30.6L0 192 0 477.9 0 512l32-11.6L176 448l224 64 176-64 0-286 0-34-32 11.6L423.5 183.4c-1.9 4-3.8 8-5.8 11.9c-5.1 10.1-11 20.2-17.1 30.1z" />
    </Icon>
);

export default MapLocation;