
import { Icon } from "../../index";

/**
 * A component that renders the `map-location-dot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location-dot?s=sharp-solid map-location-dot}
 * @preview ![map-location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/map-location-dot.svg)
 */
const MapLocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M408 120c0 70-120 200-120 200s-120-130-120-200C168 53.7 221.7 0 288 0s120 53.7 120 120zM160 200.9L160 448 0 512 0 192l133-53.2c5.5 19.4 15.1 40.6 27 62.1zm224 51.5L384 512 192 448l0-195.7c44.5 65.3 96 121 96 121s51.4-55.7 96-121zm32-51.5c2.1-3.8 4.1-7.5 6-11.3L576 128l0 320L416 512l0-311.1zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default MapLocationDot;