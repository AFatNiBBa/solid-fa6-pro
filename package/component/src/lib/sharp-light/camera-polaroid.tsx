
import { Icon } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=sharp-light camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 256l0 9.7 5.4 8.1L516.2 320 59.8 320l30.8-46.2 5.4-8.1 0-9.7L96 64l384 0 0 192zM32 361.7l6.5-9.7 499.1 0 6.5 9.7 0 86.3L32 448l0-86.3zM576 448l0-96-64-96 0-192 0-32-32 0L96 32 64 32l0 32 0 192L0 352l0 96 0 32 32 0 512 0 32 0 0-32zM336 192a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM96 384l0 32 16 0 352 0 16 0 0-32-16 0-352 0-16 0zM440 104l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default CameraPolaroid;