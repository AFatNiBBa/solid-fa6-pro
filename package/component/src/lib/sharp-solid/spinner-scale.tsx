
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=sharp-solid spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path d="M308 12l0 52c0 28.7-23.3 52-52 52s-52-23.3-52-52l0-52 104 0zM256 416c17.7 0 32 14.3 32 32l0 32-64 0 0-32c0-17.7 14.3-32 32-32zM480 288l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0 64zM96 256c0 17.7-14.3 32-32 32l-32 0 0-64 32 0c17.7 0 32 14.3 32 32zM391.8 41L471 120.2l-39.6 39.6c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2L391.8 41zM142.9 369.1c12.5 12.5 12.5 32.8 0 45.3L120.2 437 75 391.8l22.6-22.6c12.5-12.5 32.8-12.5 45.3 0zM391.8 437l-22.6-22.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L437 391.8 391.8 437zM154.2 154.2c-18.7 18.7-49.1 18.7-67.9 0L52.4 120.2l67.9-67.9 33.9 33.9c18.7 18.7 18.7 49.1 0 67.9z" />
    </Icon>
);

export default SpinnerScale;