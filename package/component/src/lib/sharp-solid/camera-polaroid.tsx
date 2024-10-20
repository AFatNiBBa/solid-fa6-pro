
import { Icon } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=sharp-solid camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32l32 0 384 0 32 0 0 32 0 182.3 58.6 87.9 5.4 8.1 0 9.7 0 96 0 32-32 0L32 480 0 480l0-32 0-96 0-9.7 5.4-8.1L64 246.3 64 64l0-32zM288 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM384 96l0 64 64 0 0-64-64 0zM112 384l-16 0 0 32 16 0 352 0 16 0 0-32-16 0-352 0z" />
    </Icon>
);

export default CameraPolaroid;