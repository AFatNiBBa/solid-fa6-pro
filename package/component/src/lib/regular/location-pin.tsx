
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin?s=regular location-pin}
 * @preview ![location-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/location-pin.svg)
 */
const LocationPin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320.7 249.2c-10.5 24.8-25.4 52.2-42.5 79.9C249.8 375.3 216.8 420 192 451.7c-24.8-31.8-57.8-76.4-86.2-122.6c-17.1-27.7-32-55.1-42.5-79.9C52.5 223.6 48 204.4 48 192c0-79.5 64.5-144 144-144s144 64.5 144 144c0 12.4-4.5 31.6-15.3 57.2zm-105 250C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0z" />
    </Icon>
);

export default LocationPin;