
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=sharp-thin camera}
 * @preview ![camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/camera.svg)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 32l21.3 64L496 96l16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 112 0 96l16 0 122.7 0L160 32l192 0zm21.3 80l-11.5 0-3.6-10.9L340.5 48 171.5 48l-17.7 53.1L150.2 112l-11.5 0L16 112l0 352 480 0 0-352-122.7 0zM256 176a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm96 112a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default Camera;