
import { Icon } from "../../index";

/**
 * A component that renders the `location-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-xmark?s=sharp-thin location-xmark}
 * @preview ![location-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/location-xmark.svg)
 */
const LocationXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 24.1 10.6 55.3 28.2 90c17.5 34.2 40.9 70 64.7 102.6c23.7 32.6 47.4 61.8 65.3 82.8c7 8.2 13 15.2 17.8 20.6c4.8-5.4 10.8-12.4 17.8-20.6c17.8-21 41.6-50.2 65.3-82.8c23.7-32.6 47.2-68.4 64.7-102.6c17.7-34.7 28.2-65.9 28.2-90zm16 0c0 95.9-140.8 262.2-181.3 308c-6.8 7.7-10.7 12-10.7 12s-4-4.3-10.7-12C140.8 454.2 0 287.9 0 192C0 86 86 0 192 0S384 86 384 192zM121.8 110.5l5.7 5.7L192 180.7l64.6-64.6 5.7-5.7 11.3 11.3-5.7 5.7L203.3 192l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L192 203.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L180.7 192l-64.6-64.6-5.7-5.7 11.3-11.3z" />
    </Icon>
);

export default LocationXmark;