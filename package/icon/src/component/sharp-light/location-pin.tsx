
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin?s=sharp-light location-pin}
 * @preview ![location-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/location-pin.svg)
 */
const LocationPin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M325.5 274.7c-16.9 33.2-39.9 68.2-63.4 100.5c-23.4 32.2-46.9 61-64.5 81.9c-1.9 2.3-3.8 4.5-5.6 6.6c-1.8-2.1-3.6-4.3-5.6-6.6c-17.7-20.8-41.1-49.7-64.5-81.9c-23.5-32.3-46.4-67.3-63.4-100.5C41.1 240.6 32 212.2 32 192c0-88.4 71.6-160 160-160s160 71.6 160 160c0 20.2-9.1 48.6-26.5 82.7zM213.3 487.9C263.3 429.9 384 280.8 384 192C384 86 298 0 192 0S0 86 0 192c0 88.8 120.7 237.9 170.7 295.9C183.8 503.1 192 512 192 512s8.2-8.9 21.3-24.1z" />
    </Icon>
);

export default LocationPin;