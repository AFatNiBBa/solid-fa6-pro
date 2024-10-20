
import { Icon } from "../../index";

/**
 * A component that renders the `file-video` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=thin file-video}
 * @preview ![file-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-video.svg)
 */
const FileVideo: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l140.1 0c1.3 0 2.6 .1 3.9 .2L208 136c0 22.1 17.9 40 40 40l119.8 0c.2 1.3 .2 2.6 .2 3.9L368 448c0 26.5-21.5 48-48 48L64 496zM358.6 157.3c.9 .9 1.7 1.8 2.4 2.7L248 160c-13.3 0-24-10.7-24-24l0-113.1c1 .8 1.9 1.6 2.7 2.4L358.6 157.3zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-268.1c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zM224 272c8.8 0 16 7.2 16 16l0 24 0 48 0 24c0 8.8-7.2 16-16 16l-112 0c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16l112 0zm32 112l0-10.2 42.6 24.3c2.2 1.2 4.6 1.9 7.1 1.9c7.9 0 14.3-6.4 14.3-14.3l0-99.4c0-7.9-6.4-14.3-14.3-14.3c-2.5 0-4.9 .7-7.1 1.9L256 298.2l0-10.2c0-17.7-14.3-32-32-32l-112 0c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l112 0c17.7 0 32-14.3 32-32zm48-1.2l-48-27.4 0-38.7 48-27.4 0 93.6z" />
    </Icon>
);

export default FileVideo;