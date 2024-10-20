
import { Icon } from "../../index";

/**
 * A component that renders the `file-gif` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-gif?s=thin file-gif}
 * @preview ![file-gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-gif.svg)
 */
const FileGif: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 496L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l140.1 0c1.3 0 2.6 .1 3.9 .2L208 136c0 22.1 17.9 40 40 40l119.8 0c.2 1.3 .2 2.6 .2 3.9L368 304l16 0 0-124.1c0-12.7-5.1-24.9-14.1-33.9L238.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l112 0 0-16zM361.1 160L248 160c-13.3 0-24-10.7-24-24l0-113.1c1 .8 1.9 1.6 2.7 2.4L358.6 157.3c.9 .9 1.7 1.8 2.4 2.7zM232 400l0 80c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-24c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l8 0 0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 8c0 4.4 3.6 8 8 8s8-3.6 8-8l0-8c0-17.7-14.3-32-32-32l-16 0c-17.7 0-32 14.3-32 32zm144-24c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 128c0 4.4 3.6 8 8 8s8-3.6 8-8l0-128zm56-8c-4.4 0-8 3.6-8 8l0 64 0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 40 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40 0 0-48 40 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-48 0z" />
    </Icon>
);

export default FileGif;