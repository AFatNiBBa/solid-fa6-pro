
import { Icon } from "../../index";

/**
 * A component that renders the `camera-movie` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-movie?s=sharp-light camera-movie}
 * @preview ![camera-movie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/camera-movie.svg)
 */
const CameraMovie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 0c40.8 0 76.4 21.8 96 54.3C259.6 21.8 295.2 0 336 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-192 0C82.1 224 32 173.9 32 112S82.1 0 144 0zM64 112c0 44.2 35.8 80 80 80l192 0c44.2 0 80-35.8 80-80s-35.8-80-80-80c-39.6 0-72.5 28.8-78.9 66.6L254.9 112l-13.5 0-2.7 0-13.5 0-2.2-13.4C216.5 60.8 183.6 32 144 32c-44.2 0-80 35.8-80 80zm80-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm168 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM152 288l-16 0-40 0 0 192 288 0 0-192-232 0zm0-32l232 0 32 0 0 32 0 192 0 32-32 0L96 512l-32 0 0-32 0-192-48 0L0 288l0-32 16 0 48 0 32 0 40 0 16 0zM448 467.7l0-33.9 96 33.2 0-166.1-96 33.2 0-33.9 96-33.2L576 256l0 33.9 0 188.3 0 33.9-32-11.1-96-33.2z" />
    </Icon>
);

export default CameraMovie;