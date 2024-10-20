
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-dot-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot-slash?s=duotone location-dot-slash}
 * @preview ![location-dot-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/location-dot-slash.svg)
 */
const LocationDotSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128.1 196.9c4.2 88.2 117.8 239.3 168.2 302.2c6.1 7.7 14.9 11.5 23.7 11.5s17.6-3.8 23.7-11.5c16.2-20.2 39-49.6 62.5-83.1L128.1 196.9zM154 95.4c30.1 23.6 60.2 47.2 90.2 70.7C255 134.7 284.9 112 320 112c44.2 0 80 35.8 80 80c0 28.3-14.7 53.1-36.8 67.4c31.9 25 63.9 50.1 95.8 75.1c30-51.6 53-103.7 53-142.5C512 86 426 0 320 0C249.2 0 187.3 38.3 154 95.4z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default LocationDotSlash;