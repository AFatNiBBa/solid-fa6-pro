
import { Icon } from "../../index";

/**
 * A component that renders the `location-exclamation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-exclamation?s=light location-exclamation}
 * @preview ![location-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/location-exclamation.svg)
 */
const LocationExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM192 96c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zM168 320a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default LocationExclamation;