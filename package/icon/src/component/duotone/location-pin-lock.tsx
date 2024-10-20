
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-pin-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-lock?s=duotone location-pin-lock}
 * @preview ![location-pin-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/location-pin-lock.svg)
 */
const LocationPinLock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c0 87.4 117 243 168.3 307.2c6.1 7.7 14.9 11.5 23.7 11.5s17.6-3.8 23.7-11.5c11-13.8 25.1-31.7 40.3-52.3l0-94.8c0-23.7 12.9-44.4 32-55.4l0-24.6c0-55.6 40.5-101.7 93.6-110.5C367 70 287.7 0 192 0C86 0 0 86 0 192zm256 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M368 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default LocationPinLock;