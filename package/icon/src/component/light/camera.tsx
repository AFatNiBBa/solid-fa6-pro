
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=light camera}
 * @preview ![camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/camera.svg)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M191.1 32c-20.7 0-39 13.2-45.5 32.8L135.1 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-71.1 0L366.5 64.8C359.9 45.2 341.6 32 320.9 32L191.1 32zM175.9 74.9c2.2-6.5 8.3-10.9 15.2-10.9l129.9 0c6.9 0 13 4.4 15.2 10.9l14 42.1c2.2 6.5 8.3 10.9 15.2 10.9l82.7 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l82.7 0c6.9 0 13-4.4 15.2-10.9l14-42.1zM256 400a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM176 288a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default Camera;