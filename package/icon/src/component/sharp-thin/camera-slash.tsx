
import { Icon } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=sharp-thin camera-slash}
 * @preview ![camera-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/camera-slash.svg)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zM487.5 480l-20.3-16L80 464l0-305.7L64 145.6 64 464l0 16 16 0 407.5 0zM209.1 76.7l13.4 10.5L235.5 48l168.9 0 17.7 53.1 3.6 10.9 11.5 0L560 112l0 241.7 16 12.6L576 112l0-16-16 0L437.3 96 416 32 224 32 209.1 76.7zm2 185c-2 8.4-3.1 17.2-3.1 26.2c0 61.9 50.1 112 112 112c18.3 0 35.6-4.4 50.8-12.2l-14.1-11.1C345.4 381.4 333 384 320 384c-53 0-96-43-96-96c0-5.1 .4-10.2 1.2-15.1l-14.1-11.1z" />
    </Icon>
);

export default CameraSlash;