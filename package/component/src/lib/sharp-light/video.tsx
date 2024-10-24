
import { Icon } from "../../index";

/**
 * A component that renders the `video` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=sharp-light video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 96l0 320 320 0 0-320L32 96zM0 64l32 0 320 0 32 0 0 32 0 64 0 192 0 64 0 32-32 0L32 448 0 448l0-32L0 96 0 64zM544 396.2l0-280.4-128 64 0-35.8L544 80l32-16 0 35.8 0 312.4 0 35.8-32-16L416 368l0-35.8 128 64z" />
    </Icon>
);

export default Video;