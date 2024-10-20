
import { Icon } from "../../index";

/**
 * A component that renders the `location-dot-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot-slash?s=solid location-dot-slash}
 * @preview ![location-dot-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/location-dot-slash.svg)
 */
const LocationDotSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L459 334.5c30-51.6 53-103.7 53-142.5C512 86 426 0 320 0C249.2 0 187.3 38.4 154 95.4L38.8 5.1zm219 171.7c6.8-28 32.1-48.8 62.2-48.8c35.3 0 64 28.7 64 64c0 24.7-13.9 46-34.4 56.7l-91.8-72zm85.9 322.4c16.2-20.2 39-49.6 62.5-83.1L128.1 196.9c4.2 88.2 117.8 239.3 168.2 302.2c12.3 15.3 35.1 15.3 47.4 0z" />
    </Icon>
);

export default LocationDotSlash;