
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-check?s=duotone location-check}
 * @preview ![location-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/location-check.svg)
 */
const LocationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 87.4 117 243 168.3 307.2c6.1 7.7 14.9 11.5 23.7 11.5s17.6-3.8 23.7-11.5C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192zm88 0c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0c12.1 12.1 24.2 24.2 36.4 36.4c29.9-29.9 59.8-59.8 89.7-89.7c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17c-35.6 35.6-71.1 71.1-106.7 106.7c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L95 209c-4.7-4.7-7-10.8-7-17z" />
        <path d="M289 121.7c9.4 9.4 9.4 24.6 0 33.9L182.3 262.3c-9.4 9.4-24.6 9.4-33.9 0L95 209c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36.4 36.4L255 121.7c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default LocationCheck;