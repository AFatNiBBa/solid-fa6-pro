
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin?s=sharp-thin location-pin}
 * @preview ![location-pin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/location-pin.svg)
 */
const LocationPin: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M339.8 282c-17.5 34.2-40.9 70-64.7 102.6c-23.7 32.6-47.4 61.8-65.3 82.8c-7 8.2-13 15.2-17.8 20.6c-4.8-5.4-10.8-12.4-17.8-20.6c-17.8-21-41.6-50.2-65.3-82.8C85.2 351.9 61.7 316.2 44.2 282C26.6 247.3 16 216.1 16 192C16 94.8 94.8 16 192 16s176 78.8 176 176c0 24.1-10.6 55.3-28.2 90zM202.7 500C243.2 454.2 384 287.9 384 192C384 86 298 0 192 0S0 86 0 192c0 95.9 140.8 262.2 181.3 308c6.8 7.7 10.7 12 10.7 12s4-4.3 10.7-12z" />
    </Icon>
);

export default LocationPin;