
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=sharp-light camera}
 * @preview ![camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/camera.svg)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 32l192 0 21.3 64L480 96l32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 128 0 96l32 0 106.7 0L160 32zm213.3 96l-23.1 0L343 106.1 328.9 64 183.1 64l-14 42.1L161.7 128l-23.1 0L32 128l0 320 448 0 0-320-106.7 0zM256 176a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm80 112a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default Camera;