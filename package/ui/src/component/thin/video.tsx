
import { Icon } from "../../index";

/**
 * A component that renders the `video` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=thin video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-74.9 0-106.2 0-74.9c0-26.5-21.5-48-48-48L64 80zM384 336.8l0 47.2c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 47.2 0 27.7 0 106.2 0 27.7zm135.4 74.5L416 354.4l0-18.3 111.1 61.1c3.3 1.8 7 2.7 10.7 2.7c12.3 0 22.2-9.9 22.2-22.2l0-243.6c0-12.3-9.9-22.2-22.2-22.2c-3.7 0-7.4 .9-10.7 2.7L416 175.9l0-18.3 103.4-56.9c5.6-3.1 12-4.7 18.4-4.7c21.1 0 38.2 17.1 38.2 38.2l0 243.6c0 21.1-17.1 38.2-38.2 38.2c-6.4 0-12.8-1.6-18.4-4.7z" />
    </Icon>
);

export default Video;