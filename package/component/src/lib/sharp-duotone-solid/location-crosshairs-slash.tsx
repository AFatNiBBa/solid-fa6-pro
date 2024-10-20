
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-crosshairs-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs-slash?s=sharp-duotone-solid location-crosshairs-slash}
 * @preview ![location-crosshairs-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/location-crosshairs-slash.svg)
 */
const LocationCrosshairsSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l0 64 32 0 34.7 0c13.5 80.4 76.9 143.9 157.3 157.3l0 34.7 0 32 64 0 0-32 0-34.7c22.6-3.8 43.8-11.5 62.9-22.4l-56.8-44.7C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128c0-2.9 .1-5.7 .3-8.5l-56.8-44.7c-2 6.9-3.6 14-4.8 21.3L96 224l-32 0zM184.2 120.3c17.1 13.2 34.1 26.5 51.2 39.7c22.6-19.9 52.2-32 84.6-32c70.7 0 128 57.3 128 128c0 21-5 40.7-14 58.2l51.2 39.7C497 334 505.4 311.7 509.3 288l34.7 0 32 0 0-64-32 0-34.7 0C495.9 143.6 432.4 80.1 352 66.7L352 32l0-32L288 0l0 32 0 34.7c-40.2 6.7-76.2 26-103.8 53.6zm90.2 70c40.2 31.2 80.4 62.4 120.6 93.6c3.2-8.7 5-18.1 5-27.9c0-44.2-35.8-80-80-80c-16.9 0-32.7 5.3-45.6 14.3z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default LocationCrosshairsSlash;