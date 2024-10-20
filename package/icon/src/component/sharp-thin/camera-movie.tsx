
import { Icon } from "../../index";

/**
 * A component that renders the `camera-movie` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-movie?s=sharp-thin camera-movie}
 * @preview ![camera-movie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/camera-movie.svg)
 */
const CameraMovie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 128C16 66.1 66.1 16 128 16c47.6 0 88.4 29.7 104.5 71.7l7.5 19.4 7.5-19.4C263.6 45.7 304.4 16 352 16c61.9 0 112 50.1 112 112s-50.1 112-112 112l-224 0C66.1 240 16 189.9 16 128zM128 0C57.3 0 0 57.3 0 128s57.3 128 128 128l224 0c70.7 0 128-57.3 128-128S422.7 0 352 0c-48.2 0-90.2 26.6-112 66C218.2 26.6 176.2 0 128 0zM448 467.7l112 38.8 16 5.5 0-16.9 0-222.1 0-16.9-16 5.5L448 300.3l0 16.9 112-38.8 0 211.1L448 450.8l0 16.9zM48 352l16 0 0 16 0 128 0 16 16 0 320 0 16 0 0-16 0-192 0-16-16 0-240 0-32 0-64 0-32 0-16 0L0 288l0 16 0 32 0 16 16 0 16 0 16 0zM16 336l0-32 16 0 32 0 64 0 32 0 240 0 0 192L80 496l0-144 0-16-16 0-32 0-16 0zM128 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm176-64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default CameraMovie;