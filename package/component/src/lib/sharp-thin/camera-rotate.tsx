
import { Icon } from "../../index";

/**
 * A component that renders the `camera-rotate` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-rotate?s=sharp-thin camera-rotate}
 * @preview ![camera-rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/camera-rotate.svg)
 */
const CameraRotate: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 32l21.3 64L560 96l16 0 0 16 0 352 0 16-16 0L80 480l-16 0 0-16 0-352 0-16 16 0 122.7 0L224 32l192 0zm21.3 80l-11.5 0-3.6-10.9L404.5 48 235.5 48l-17.7 53.1L214.2 112l-11.5 0L80 112l0 352 480 0 0-352-122.7 0zM224 312l64 0 8 0 0 16-8 0-44.7 0L271 355.7c13 13 30.6 20.3 49 20.3c30.6 0 57.6-15.6 73.3-39.3l13.3 8.9C388 373.5 356.2 392 320 392c-22.6 0-44.3-9-60.3-25L232 339.3l0 44.7 0 8-16 0 0-8 0-64 0-8 8 0zm200-48l-8 0-64 0-8 0 0-16 8 0 44.7 0L369 220.3c-13-13-30.6-20.3-49-20.3c-30.6 0-57.6 15.6-73.3 39.3l-13.3-8.9C252 202.5 283.8 184 320 184c22.6 0 44.3 9 60.3 25L408 236.7l0-44.7 0-8 16 0 0 8 0 64 0 8z" />
    </Icon>
);

export default CameraRotate;