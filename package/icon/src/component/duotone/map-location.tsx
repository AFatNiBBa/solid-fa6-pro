
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map-location` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location?s=duotone map-location}
 * @preview ![map-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/map-location.svg)
 */
const MapLocation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 209.6L0 480.4c0 17 17.1 28.6 32.9 22.3L160 451.8l0-251.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49C6 191 0 199.8 0 209.6zM192 255l0 194.4 192 54.9L384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77zm224-54.6L416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3L576 152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6z" />
        <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120z" />
    </Icon>
);

export default MapLocation;