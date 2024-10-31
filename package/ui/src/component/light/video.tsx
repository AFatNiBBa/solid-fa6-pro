
import { Icon } from "../../index";

/**
 * A component that renders the `video` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=light video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L64 96zM0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 47.2 0 161.6 0 47.2c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM519.4 411.3L416 354.4l0-36.5 118.8 65.4c.9 .5 1.9 .8 3 .8c3.4 0 6.2-2.8 6.2-6.2l0-243.6c0-3.4-2.8-6.2-6.2-6.2c-1 0-2.1 .3-3 .8L416 194.1l0-36.5 103.4-56.9c5.6-3.1 12-4.7 18.4-4.7c21.1 0 38.2 17.1 38.2 38.2l0 243.6c0 21.1-17.1 38.2-38.2 38.2c-6.4 0-12.8-1.6-18.4-4.7z" />
    </Icon>
);

export default Video;