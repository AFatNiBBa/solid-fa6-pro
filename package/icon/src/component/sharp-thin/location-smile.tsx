
import { Icon } from "../../index";

/**
 * A component that renders the `location-smile` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-smile?s=sharp-thin location-smile}
 * @preview ![location-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/location-smile.svg)
 */
const LocationSmile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 24.1 10.6 55.3 28.2 90c17.5 34.2 40.9 70 64.7 102.6c23.7 32.6 47.4 61.8 65.3 82.8c7 8.2 13 15.2 17.8 20.6c4.8-5.4 10.8-12.4 17.8-20.6c17.8-21 41.6-50.2 65.3-82.8c23.7-32.6 47.2-68.4 64.7-102.6c17.7-34.7 28.2-65.9 28.2-90zm16 0c0 95.9-140.8 262.2-181.3 308c-6.8 7.7-10.7 12-10.7 12s-4-4.3-10.7-12C140.8 454.2 0 287.9 0 192C0 86 86 0 192 0S384 86 384 192zM128 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm112 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM89.3 268.4l13.3-8.9C112.3 274 144.2 304 192 304s79.7-30 89.3-44.4l13.3 8.9C282.9 286 246.6 320 192 320s-90.9-34-102.7-51.6z" />
    </Icon>
);

export default LocationSmile;