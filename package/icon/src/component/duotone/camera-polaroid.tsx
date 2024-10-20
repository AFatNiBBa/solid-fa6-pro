
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=duotone camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 361.7c0-3.3 .2-6.5 .7-9.7l574.5 0c.5 3.2 .7 6.4 .7 9.7l0 54.3c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-54.3zM96 416c0 8.8 7.2 16 16 16l352 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-352 0c-8.8 0-16 7.2-16 16zM224 192c0-1.1 0-2.2 .1-3.3c.1-1.1 .1-2.2 .2-3.2c.2-2.1 .5-4.3 1-6.3c.9-4.2 2.1-8.2 3.7-12c3.2-7.7 7.9-14.6 13.7-20.3C254.3 135.2 270.3 128 288 128c35.3 0 64 28.7 64 64s-28.7 64-64 64c-17.7 0-33.7-7.2-45.3-18.7c-5.8-5.8-10.5-12.7-13.7-20.3c-1.6-3.8-2.9-7.8-3.7-12c-.4-2.1-.8-4.2-1-6.4c-.1-1.1-.2-2.1-.2-3.2c-.1-1.1-.1-2.2-.1-3.3z" />
        <path d="M64 96c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 150.3 53.3 79.9c5.2 7.8 8.6 16.6 10 25.8L.7 352c1.4-9.2 4.8-18 10-25.8L64 246.3 64 96zM288 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM448 128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default CameraPolaroid;