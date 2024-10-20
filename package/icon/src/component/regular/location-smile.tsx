
import { Icon } from "../../index";

/**
 * A component that renders the `location-smile` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-smile?s=regular location-smile}
 * @preview ![location-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/location-smile.svg)
 */
const LocationSmile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 12.4 4.5 31.6 15.3 57.2c10.5 24.8 25.4 52.2 42.5 79.9c28.5 46.2 61.5 90.8 86.2 122.6c24.8-31.8 57.8-76.4 86.2-122.6c17.1-27.7 32-55.1 42.5-79.9C331.5 223.6 336 204.4 336 192zm48 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM136 128a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm88 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-79.4 76.9c4.5 6.7 21.6 23.1 47.4 23.1s42.9-16.4 47.4-23.1c6.1-9.2 18.5-11.7 27.7-5.5s11.7 18.5 5.5 27.7C262.9 265.7 234.5 292 192 292s-70.9-26.3-80.6-40.9c-6.1-9.2-3.6-21.6 5.5-27.7s21.6-3.6 27.7 5.5z" />
    </Icon>
);

export default LocationSmile;