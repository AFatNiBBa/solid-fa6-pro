
import { Icon } from "../../index";

/**
 * A component that renders the `map-location-dot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location-dot?s=sharp-regular map-location-dot}
 * @preview ![map-location-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/map-location-dot.svg)
 */
const MapLocationDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 70 120 200 120 200s120-130 120-200zm-160-8a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM373.9 265.1C366.4 275.3 359 285 352 293.9l0 158.3L224 405.7l0-111.8c-7-8.8-14.4-18.5-21.9-28.8c-8.8-12.1-17.8-25.1-26.1-38.6l0 178.8-128 41L48 195l96.6-30.9c-5.2-14.6-8.6-29.6-8.6-44.1c0-1.2 0-2.4 0-3.5L0 160 0 461.6 0 512l48-15.4L200 448l176 64 200-64 0-301.6L576 96l-48 15.4-90 28.8c-3.6 19-11.5 38.1-20.3 55.2l-1.1 2L528 161.8 528 413l-128 41 0-227.4c-8.4 13.4-17.3 26.5-26.1 38.6z" />
    </Icon>
);

export default MapLocationDot;