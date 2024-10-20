
import { Icon } from "../../index";

/**
 * A component that renders the `location-smile` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-smile?s=thin location-smile}
 * @preview ![location-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-smile.svg)
 */
const LocationSmile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6c11.3 26.9 27.1 55.8 44.7 84.3c35.2 57 76.8 111.4 102.3 143.2c5.9 7.3 16.6 7.3 22.4 0c25.5-31.8 67.1-86.2 102.3-143.2c17.6-28.5 33.4-57.4 44.7-84.3C361.6 234.5 368 210.7 368 192zm16 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM128 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm112 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM102.7 259.6C112.3 274 144.2 304 192 304s79.7-30 89.3-44.4c2.5-3.7 7.4-4.7 11.1-2.2s4.7 7.4 2.2 11.1C282.9 286 246.6 320 192 320s-90.9-34-102.7-51.6c-2.5-3.7-1.5-8.6 2.2-11.1s8.6-1.5 11.1 2.2z" />
    </Icon>
);

export default LocationSmile;