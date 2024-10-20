
import { Icon } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=solid camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 96c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 150.3 53.3 79.9c7 10.5 10.7 22.9 10.7 35.5l0 54.3c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-54.3c0-12.6 3.7-25 10.7-35.5L64 246.3 64 96zM288 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM448 128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l352 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-352 0z" />
    </Icon>
);

export default CameraPolaroid;