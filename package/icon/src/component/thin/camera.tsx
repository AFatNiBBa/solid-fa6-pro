
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=thin camera}
 * @preview ![camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/camera.svg)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M196.8 32c-20.7 0-39 13.2-45.5 32.8L140.9 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-76.9 0L360.7 64.8C354.2 45.2 335.8 32 315.2 32L196.8 32zM166.5 69.9C170.8 56.8 183.1 48 196.8 48l118.3 0c13.8 0 26 8.8 30.4 21.9l12.2 36.6c1.1 3.3 4.1 5.5 7.6 5.5l82.7 0c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l82.7 0c3.4 0 6.5-2.2 7.6-5.5l12.2-36.6zM256 400a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM160 288a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default Camera;