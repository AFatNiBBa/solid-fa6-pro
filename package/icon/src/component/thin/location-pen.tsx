
import { Icon } from "../../index";

/**
 * A component that renders the `location-pen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pen?s=thin location-pen}
 * @preview ![location-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-pen.svg)
 */
const LocationPen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 18.7 6.4 42.5 17.8 69.6c11.3 26.9 27.1 55.8 44.7 84.3c35.2 57 76.8 111.4 102.3 143.2c5.9 7.3 16.6 7.3 22.4 0c25.5-31.8 67.1-86.2 102.3-143.2c17.6-28.5 33.4-57.4 44.7-84.3C361.6 234.5 368 210.7 368 192zm16 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zM100.6 283.4c-4-4-5.6-9.7-4.2-15.2l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9L223.6 107c14.7-14.7 38.6-14.7 53.4 0s14.7 38.6 0 53.4L167.4 270c-4.1 4.1-9.2 7-14.9 8.4l-36.7 9.2c-5.5 1.4-11.2-.2-15.2-4.2zm15.7-28.9l-4.4 17.6 17.6-4.4 19.1-4.8c2.8-.7 5.4-2.2 7.4-4.2L241.7 173 211 142.3l-85.7 85.7c-2.1 2.1-3.5 4.6-4.2 7.4l-4.8 19.1zM265.7 149.1c8.5-8.5 8.5-22.3 0-30.7s-22.3-8.5-30.7 0L222.3 131 253 161.7l12.6-12.6z" />
    </Icon>
);

export default LocationPen;