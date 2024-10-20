
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=light location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 70.3L68 441.7 214.8 338.9c5.5-3.9 12.8-3.9 18.4 0L380 441.7 224 70.3zM198.2 49.2C202.5 38.8 212.7 32 224 32s21.5 6.8 25.8 17.2L413.7 439.3c1.5 3.6 2.3 7.5 2.3 11.4l0 1.2c0 15.6-12.6 28.2-28.2 28.2c-5.8 0-11.4-1.8-16.2-5.1L224 371.5 76.3 474.9c-4.7 3.3-10.4 5.1-16.2 5.1C44.6 480 32 467.4 32 451.8l0-1.2c0-3.9 .8-7.8 2.3-11.4L198.2 49.2z" />
    </Icon>
);

export default LocationArrowUp;