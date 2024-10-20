
import { Icon } from "../../index";

/**
 * A component that renders the `map-location` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location?s=sharp-thin map-location}
 * @preview ![map-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/map-location.svg)
 */
const MapLocation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M392 120c0 13.6-6.1 32.1-17 53.5c-10.7 21-25.2 43.1-39.9 63.3c-14.7 20.2-29.4 38.3-40.5 51.4c-2.4 2.8-4.6 5.3-6.5 7.6c-2-2.3-4.2-4.8-6.5-7.6c-11.1-13.1-25.8-31.2-40.5-51.4c-14.7-20.3-29.2-42.3-39.9-63.3c-10.9-21.4-17-39.9-17-53.5c0-57.4 46.6-104 104-104s104 46.6 104 104zm16 0C408 53.7 354.3 0 288 0S168 53.7 168 120c0 57.1 79.9 154.2 109.3 188c6.6 7.6 10.7 12 10.7 12s4.1-4.4 10.7-12C328.1 274.2 408 177.1 408 120zm6.8 81L560 150.5l0 286.1L400 492.3 400 288l-16 0 0 204.8L192 433.7 192 288l-16 0 0 145.8L16 489.5l0-286.1 126.9-44.1c-1.7-5.1-3.1-10.3-4.2-15.5L0 192 0 495.1 0 512l16-5.6L184 448l208 64 184-64 0-303.1 0-16.9-16 5.6-135.2 47c-2.2 5-4.6 10-7.1 14.7c-1 1.9-2 3.8-3 5.7z" />
    </Icon>
);

export default MapLocation;