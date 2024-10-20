
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-video` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=duotone file-video}
 * @preview ![file-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-video.svg)
 */
const FileVideo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 288l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32zm192 16l0 64 44.9 29.9c2 1.3 4.4 2.1 6.8 2.1c6.8 0 12.3-5.5 12.3-12.3l0-103.4c0-6.8-5.5-12.3-12.3-12.3c-2.4 0-4.8 .7-6.8 2.1L256 304z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM64 288l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32zM300.9 397.9c2 1.3 4.4 2.1 6.8 2.1c6.8 0 12.3-5.5 12.3-12.3l0-103.4c0-6.8-5.5-12.3-12.3-12.3c-2.4 0-4.8 .7-6.8 2.1L256 304l0 64 44.9 29.9z" />
    </Icon>
);

export default FileVideo;