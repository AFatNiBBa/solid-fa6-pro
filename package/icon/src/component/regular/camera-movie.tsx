
import { Icon } from "../../index";

/**
 * A component that renders the `camera-movie` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-movie?s=regular camera-movie}
 * @preview ![camera-movie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/camera-movie.svg)
 */
const CameraMovie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 120A72 72 0 1 0 80 120a72 72 0 1 0 144 0zM344 240l-192 0C85.7 240 32 186.3 32 120S85.7 0 152 0c39.3 0 74.1 18.8 96 48c21.9-29.1 56.7-48 96-48c66.3 0 120 53.7 120 120s-53.7 120-120 120zM272 120a72 72 0 1 0 144 0 72 72 0 1 0 -144 0zM112 336l0 112c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-112c0-8.8-7.2-16-16-16l-208 0-16 0c-8.8 0-16 7.2-16 16zm32-64l208 0c35.3 0 64 28.7 64 64l0 112c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-112c0-5.5 .7-10.9 2-16l-42 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l104 0 16 0zm384 36.6l-80 36 0-52.6 75.6-34c2.9-1.3 6-2.2 9.1-2.8c22.6-3.8 43.3 13.7 43.3 36.6l0 180.6c0 21.8-17.7 39.5-39.5 39.5c-5.6 0-11.1-1.2-16.2-3.5L448 476l0-52.6 80 36 0-150.7z" />
    </Icon>
);

export default CameraMovie;