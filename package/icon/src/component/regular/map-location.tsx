
import { Icon } from "../../index";

/**
 * A component that renders the `map-location` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location?s=regular map-location}
 * @preview ![map-location](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/map-location.svg)
 */
const MapLocation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M403 148.6c3.2-10.3 5-20 5-28.6C408 53.7 354.3 0 288 0C226.4 0 175.6 46.4 168.8 106.2c-.5 4.5-.8 9.1-.8 13.8c0 10.3 2.6 22 7 34.6c.7 2.1 1.5 4.2 2.3 6.3c10.4 27 28.3 57.1 46.7 84.4c18.1 26.9 36.7 51.1 49.2 66.6c7.7 9.6 22 9.6 29.6 0c12.4-15.5 31.1-39.7 49.2-66.6c.1-.2 .3-.4 .4-.6c4.6-6.8 9.1-13.7 13.5-20.8c3.3-5.3 6.5-10.7 9.6-16l.1-.2c11.8-20.4 21.8-40.8 27.4-59.2zm-8.3 89.6c-13.9 22.5-29.1 44.2-42.7 62.4l0 153.1L224 407.2l0-106.6c-13.5-18.2-28.8-39.9-42.7-62.4c-1.8-2.9-3.6-5.8-5.3-8.8l0 177.7L48 453.7l0-252.9 96.9-35.2c-5.2-14.9-8.9-30.5-8.9-45.6c0-.8 0-1.5 0-2.3L15.8 161.4C6.3 164.9 0 173.9 0 184L0 488c0 7.8 3.8 15.2 10.2 19.7s14.6 5.6 22 2.9l167.8-61 167.8 61c5.3 1.9 11.1 1.9 16.4 0l176-64c9.5-3.4 15.8-12.5 15.8-22.6l0-304c0-7.8-3.8-15.2-10.2-19.7s-14.6-5.6-22-2.9l-105 38.2c-2.2 15-7.3 30.2-13.2 44.2c-2 4.6-4.1 9.3-6.3 14L528 154.3l0 252.9L400 453.7l0-224.3c-1.8 3-3.5 5.9-5.3 8.8z" />
    </Icon>
);

export default MapLocation;