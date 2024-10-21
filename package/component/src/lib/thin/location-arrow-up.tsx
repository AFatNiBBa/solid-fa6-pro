
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=thin location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c-6.5 0-12.3 3.9-14.8 9.8L49.5 438.2c-1 2.3-1.5 4.7-1.5 7.2l0 2.9c0 8.7 7.1 15.8 15.8 15.8c3.5 0 7-1.2 9.8-3.4L219 345.7c2.9-2.3 7-2.3 9.9 0L374.5 460.6c2.8 2.2 6.2 3.4 9.8 3.4c8.7 0 15.8-7.1 15.8-15.8l0-2.9c0-2.5-.5-4.9-1.5-7.2L238.8 57.8c-2.5-6-8.3-9.8-14.8-9.8zm-29.6 3.7C199.4 39.7 211.1 32 224 32s24.6 7.7 29.6 19.7L413.3 432c1.8 4.2 2.7 8.8 2.7 13.4l0 2.9c0 17.5-14.2 31.8-31.8 31.8c-7.1 0-14.1-2.4-19.7-6.8L224 362.2 83.4 473.2c-5.6 4.4-12.5 6.8-19.7 6.8C46.2 480 32 465.8 32 448.2l0-2.9c0-4.6 .9-9.2 2.7-13.4L194.4 51.7z" />
    </Icon>
);

export default LocationArrowUp;