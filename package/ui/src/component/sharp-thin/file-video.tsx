
import { Icon } from "../../index";

/**
 * A component that renders the `file-video` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=sharp-thin file-video}
 * @preview ![file-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-video.svg)
 */
const FileVideo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zm16 272l0 26.5 0 5.5 0 64 0 5.5 0 26.5L96 400l0-128 144 0zm16 128l0-20.5 53.2 19.9 10.8 4.1 0-11.5 0-112 0-11.5-10.8 4.1L256 292.5l0-20.5 0-16-16 0L96 256l-16 0 0 16 0 128 0 16 16 0 144 0 16 0 0-16zm48-19.5l-48-18 0-52.9 48-18 0 88.9z" />
    </Icon>
);

export default FileVideo;