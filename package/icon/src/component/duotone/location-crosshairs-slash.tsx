
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-crosshairs-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs-slash?s=duotone location-crosshairs-slash}
 * @preview ![location-crosshairs-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/location-crosshairs-slash.svg)
 */
const LocationCrosshairsSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 17.7 14.3 32 32 32l34.7 0c13.5 80.4 76.9 143.9 157.3 157.3l0 34.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-34.7c22.6-3.8 43.8-11.5 62.9-22.4l-56.8-44.7C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128c0-2.9 .1-5.7 .3-8.5l-56.8-44.7c-2 6.9-3.6 14-4.8 21.3L96 224c-17.7 0-32 14.3-32 32zM184.9 119.6c17 13.3 34 26.6 51 40C258.3 139.9 287.8 128 320 128c70.7 0 128 57.3 128 128c0 21.2-5.1 41.1-14.2 58.7c17 13.3 34 26.6 51 40c12.1-20.1 20.6-42.6 24.6-66.6l34.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-34.7 0C495.9 143.6 432.4 80.1 352 66.7L352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 34.7c-39.9 6.7-75.6 25.7-103.1 52.9zM274.7 190c40 31.4 80.1 62.8 120.2 94.2c3.3-8.8 5.1-18.3 5.1-28.2c0-44.2-35.8-80-80-80c-16.8 0-32.4 5.2-45.3 14z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default LocationCrosshairsSlash;