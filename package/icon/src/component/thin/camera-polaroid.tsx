
import { Icon } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=thin camera-polaroid}
 * @preview ![camera-polaroid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/camera-polaroid.svg)
 */
const CameraPolaroid: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 464l448 0c26.5 0 48-21.5 48-48l0-44.6c0-6.7-1.4-13.3-4.1-19.4L20.1 352c-2.7 6.1-4.1 12.7-4.1 19.4L16 416c0 26.5 21.5 48 48 48zM546.1 336l-44.7-67.1c-3.5-5.3-5.4-11.4-5.4-17.8L496 96c0-26.5-21.5-48-48-48L128 48c-26.5 0-48 21.5-48 48l0 155.2c0 6.3-1.9 12.5-5.4 17.8L29.9 336l516.2 0zM512 480L64 480c-35.3 0-64-28.7-64-64l0-44.6c0-12.6 3.7-25 10.7-35.5L61.3 260c1.8-2.6 2.7-5.7 2.7-8.9L64 96c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 155.2c0 3.2 .9 6.2 2.7 8.9l50.6 75.8c7 10.5 10.7 22.9 10.7 35.5l0 44.6c0 35.3-28.7 64-64 64zM416 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-16-32a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM208 192a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm80 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM104 400l368 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-368 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default CameraPolaroid;