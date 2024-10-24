
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-check?s=sharp-duotone-solid location-check}
 * @preview ![location-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-check.svg)
 */
const LocationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192zm81.7 3.6c11.3-11.3 22.6-22.6 33.9-33.9l49.7 49.7c34.3-34.4 68.7-68.7 103-103c11.3 11.3 22.6 22.6 33.9 33.9l-120 120-17 17-17-17c-22.2-22.2-44.4-44.4-66.7-66.7z" />
        <path d="M302.3 142.3l-120 120-17 17-17-17L81.7 195.6l33.9-33.9 49.7 49.7 103-103 33.9 33.9z" />
    </Icon>
);

export default LocationCheck;