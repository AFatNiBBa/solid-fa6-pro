
import { Icon } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=regular camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 432L64 432c-8.8 0-16-7.2-16-16l0-32 480 0 0 32c0 8.8-7.2 16-16 16zM68.4 336l32.9-49.3c7-10.5 10.7-22.9 10.7-35.5L112 96c0-8.8 7.2-16 16-16l320 0c8.8 0 16 7.2 16 16l0 155.2c0 12.6 3.7 25 10.7 35.5L507.6 336 68.4 336zM64 480l448 0c35.3 0 64-28.7 64-64l0-44.6c0-12.6-3.7-25-10.7-35.5L514.7 260c-1.8-2.6-2.7-5.7-2.7-8.9L512 96c0-35.3-28.7-64-64-64L128 32C92.7 32 64 60.7 64 96l0 155.2c0 3.2-.9 6.2-2.7 8.9L10.7 335.9C3.7 346.4 0 358.7 0 371.4L0 416c0 35.3 28.7 64 64 64zM408 112a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM288 288a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm-32-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CameraPolaroid;