
import { Icon } from "../../index";

/**
 * A component that renders the `map-location` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location?s=thin map-location}
 * @preview ![map-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/map-location.svg)
 */
const MapLocation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M392 120c0-57.4-46.6-104-104-104s-104 46.6-104 104c0 10.5 3.6 24.5 10.7 41.2c6.9 16.4 16.6 34.2 27.5 51.9c21.8 35.4 47.6 69.1 63.5 88.9c1.3 1.6 3.4 1.6 4.6 0c15.9-19.8 41.7-53.6 63.5-88.9c10.9-17.7 20.6-35.5 27.5-51.9c7-16.7 10.7-30.7 10.7-41.2zm16 0c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm130.5 27.2L421.1 189.9c1.6-3.4 3.1-6.7 4.5-10.1c1.4-3.3 2.7-6.6 4-10l103.5-37.6c20.9-7.6 42.9 7.9 42.9 30.1l0 260.9c0 13.5-8.4 25.5-21.1 30.1L394.7 511.5c-1.6 .6-3.4 .6-5.1 .1L184.2 448.4 42.9 499.8C22.1 507.4 0 491.9 0 469.7L0 208.8c0-13.5 8.4-25.5 21.1-30.1l116.3-42.3c.8 5.3 2 10.5 3.4 15.8L26.5 193.8c-6.3 2.3-10.5 8.3-10.5 15l0 260.9c0 11.1 11 18.8 21.5 15L176 434.4 176 296c0-4.4 3.6-8 8-8s8 3.6 8 8l0 138.1 192 59.1L384 296c0-4.4 3.6-8 8-8s8 3.6 8 8l0 196.6 149.5-54.4c6.3-2.3 10.5-8.3 10.5-15l0-260.9c0-11.1-11-18.8-21.5-15z" />
    </Icon>
);

export default MapLocation;