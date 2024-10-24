
import { Icon } from "../../index";

/**
 * A component that renders the `location-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-arrow-up?s=sharp-thin location-arrow-up}
 * @preview ![location-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/location-arrow-up.svg)
 */
const LocationArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 347.7l9.8 7.6L368.7 460.3l27-18L224 70.2 52.3 442.3l27 18L214.2 355.4l9.8-7.6zM80 480L32 448 215.2 51.1 224 32l8.8 19.1L416 448l-48 32L224 368 80 480z" />
    </Icon>
);

export default LocationArrowUp;