
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin?s=light location-pin}
 * @preview ![location-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/location-pin.svg)
 */
const LocationPin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M335.4 255.4c-10.9 25.9-26.2 54-43.6 82.1c-34.1 55.3-74.4 108.2-99.9 140c-25.4-31.8-65.8-84.7-99.9-140c-17.3-28.1-32.7-56.3-43.6-82.1C37.4 229 32 207.6 32 192c0-88.4 71.6-160 160-160s160 71.6 160 160c0 15.6-5.4 37-16.6 63.4zM215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0z" />
    </Icon>
);

export default LocationPin;