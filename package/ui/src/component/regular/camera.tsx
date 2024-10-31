
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=regular camera}
 * @preview ![camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/camera.svg)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M199.1 32c-24.1 0-45.5 15.4-53.1 38.3l22.8 7.6-22.8-7.6L137.4 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-73.4 0-8.6-25.7C358.4 47.4 337 32 312.9 32L199.1 32zm-7.6 53.5c1.1-3.3 4.1-5.5 7.6-5.5l113.9 0c3.4 0 6.5 2.2 7.6 5.5l14 42.1c3.3 9.8 12.4 16.4 22.8 16.4l90.7 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l90.7 0c10.3 0 19.5-6.6 22.8-16.4l14-42.1zM256 400a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 288a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Camera;