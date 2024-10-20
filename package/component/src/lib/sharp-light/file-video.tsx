
import { Icon } from "../../index";

/**
 * A component that renders the `file-video` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=sharp-light file-video}
 * @preview ![file-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-video.svg)
 */
const FileVideo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM208 288l0 13.2 0 10.8 0 48 0 10.8 0 13.2L96 384l0-96 112 0zm32 96l0-.4 58.1 23.2 21.9 8.8 0-23.6 0-112 0-23.6-21.9 8.8L240 288.4l0-.4 0-32-32 0L96 256l-32 0 0 32 0 96 0 32 32 0 112 0 32 0 0-32zm48-15.6l-48-19.2 0-26.3 48-19.2 0 64.7z" />
    </Icon>
);

export default FileVideo;