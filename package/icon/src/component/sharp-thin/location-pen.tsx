
import { Icon } from "../../index";

/**
 * A component that renders the `location-pen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pen?s=sharp-thin location-pen}
 * @preview ![location-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/location-pen.svg)
 */
const LocationPen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 24.1 10.6 55.3 28.2 90c17.5 34.2 40.9 70 64.7 102.6c23.7 32.6 47.4 61.8 65.3 82.8c7 8.2 13 15.2 17.8 20.6c4.8-5.4 10.8-12.4 17.8-20.6c17.8-21 41.6-50.2 65.3-82.8c23.7-32.6 47.2-68.4 64.7-102.6c17.7-34.7 28.2-65.9 28.2-90zm16 0c0 95.9-140.8 262.2-181.3 308c-6.8 7.7-10.7 12-10.7 12s-4-4.3-10.7-12C140.8 454.2 0 287.9 0 192C0 86 86 0 192 0S384 86 384 192zM236.5 96.3l.2-.2 40.1 40.1 11.3 11.3-11.3 11.3L156.9 278.7l-44.3 6.9L96 288.1l2.6-16.6 6.9-44.3 131-131zm.2 22.4L215.3 140l28.8 28.8 21.4-21.4-28.8-28.8zM120.5 234.9L115.2 269l34.1-5.3 83.5-83.5L204 151.3l-83.5 83.5z" />
    </Icon>
);

export default LocationPen;