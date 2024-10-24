
import { Icon } from "../../index";

/**
 * A component that renders the `location-minus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-minus?s=thin location-minus}
 * @preview ![location-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-minus.svg)
 */
const LocationMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6c11.3 26.9 27.1 55.8 44.7 84.3c35.2 57 76.8 111.4 102.3 143.2c5.9 7.3 16.6 7.3 22.4 0c25.5-31.8 67.1-86.2 102.3-143.2c17.6-28.5 33.4-57.4 44.7-84.3C361.6 234.5 368 210.7 368 192zm16 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM96 184l192 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L96 200c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default LocationMinus;