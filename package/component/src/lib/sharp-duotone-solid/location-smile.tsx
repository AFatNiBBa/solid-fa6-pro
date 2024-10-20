
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-smile` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-smile?s=sharp-duotone-solid location-smile}
 * @preview ![location-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-smile.svg)
 */
const LocationSmile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm95.4 75.1c11.1-7.4 22.2-14.8 33.3-22.2c6.2 9.4 29.1 31.1 63.4 31.1s57.1-21.7 63.4-31.1c11.1 7.4 22.2 14.8 33.3 22.2C277.1 284.4 243.1 316 192 316s-85.1-31.6-96.6-48.9zM96 160c0-.3 0-.6 0 0zm128 0c0-.3 0-.6 0 0z" />
        <path d="M160 160a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM95.4 267.1C106.9 284.4 140.9 316 192 316s85.1-31.6 96.6-48.9l-33.3-22.2c-6.2 9.4-29.1 31.1-63.4 31.1s-57.1-21.7-63.4-31.1L95.4 267.1z" />
    </Icon>
);

export default LocationSmile;