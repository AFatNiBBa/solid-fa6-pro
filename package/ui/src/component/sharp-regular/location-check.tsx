
import { Icon } from "../../index";

/**
 * A component that renders the `location-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-check?s=sharp-regular location-check}
 * @preview ![location-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/location-check.svg)
 */
const LocationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 16.3 7.7 42 24.7 75.4c16.4 32.2 38.8 66.4 62.1 98.3c20.3 27.9 40.7 53.3 57.2 73.1c16.5-19.8 36.9-45.2 57.2-73.1c23.2-31.9 45.6-66.2 62.1-98.3C328.3 234 336 208.3 336 192zm48 0c0 83.1-105.6 219-160.2 283.6C204.8 498.1 192 512 192 512s-12.8-13.9-31.8-36.4C105.6 411 0 275.1 0 192C0 86 86 0 192 0S384 86 384 192zM182.3 278.3l-17 17-17-17L81.7 211.6l33.9-33.9 49.7 49.7 103-103 33.9 33.9-120 120z" />
    </Icon>
);

export default LocationCheck;