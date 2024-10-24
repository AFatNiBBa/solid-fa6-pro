
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow?s=thin location-arrow}
 * @preview ![location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/location-arrow.svg)
 */
const LocationArrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 240L48 240c-7.6 0-14.2-5.4-15.7-12.9s2.6-15 9.6-17.9l352-144c6-2.4 12.8-1.1 17.4 3.5s5.9 11.4 3.5 17.4l-144 352c-2.9 7.1-10.4 11.1-17.9 9.6s-12.9-8.1-12.9-15.7l0-176c0-8.8-7.2-16-16-16zm-16 16l16 0 0 16 0 160c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l160 0z" />
    </Icon>
);

export default LocationArrow;