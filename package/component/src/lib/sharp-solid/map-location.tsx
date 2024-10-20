
import { Icon } from "../../index";

/**
 * A component that renders the `map-location` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location?s=sharp-solid map-location}
 * @preview ![map-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/map-location.svg)
 */
const MapLocation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 320s120-130 120-200C408 53.7 354.3 0 288 0S168 53.7 168 120c0 70 120 200 120 200zM133 138.8L0 192 0 512l160-64 0-247.1c-11.9-21.4-21.5-42.6-27-62.1zM288 373.3s-51.5-55.7-96-121L192 448l192 64 0-259.7c-44.6 65.3-96 121-96 121zM422 189.6c-1.9 3.7-4 7.5-6 11.3L416 512l160-64 0-320L422 189.6z" />
    </Icon>
);

export default MapLocation;