
import { Icon } from "../../index";

/**
 * A component that renders the `location-xmark` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-xmark?s=light location-xmark}
 * @preview ![location-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/location-xmark.svg)
 */
const LocationXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM116.7 116.7c6.2-6.2 16.4-6.2 22.6 0L192 169.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L214.6 192l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L192 214.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L169.4 192l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6z" />
    </Icon>
);

export default LocationXmark;