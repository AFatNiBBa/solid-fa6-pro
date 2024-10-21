
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-slash?s=regular location-pin-slash}
 * @preview ![location-pin-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/location-pin-slash.svg)
 */
const LocationPinSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L459 334.5c30-51.6 53-103.7 53-142.5C512 86 426 0 320 0C249.2 0 187.3 38.4 154 95.4L38.8 5.1zM192.3 125.4C216.3 79.4 264.5 48 320 48c79.5 0 144 64.5 144 144c0 12.4-4.5 31.6-15.3 57.2c-7.4 17.4-16.9 36.2-27.9 55.4L192.3 125.4zm-2.5 120.1l-61.7-48.6c4.2 88.2 117.8 239.3 168.2 302.2c12.3 15.3 35.1 15.3 47.4 0c16.2-20.2 39-49.6 62.5-83.1l-37.8-29.8c-17.3 24.6-34.2 47.2-48.5 65.4c-24.8-31.8-57.8-76.4-86.2-122.6c-17.1-27.7-32-55.1-42.5-79.9c-.5-1.2-1-2.5-1.5-3.7z" />
    </Icon>
);

export default LocationPinSlash;