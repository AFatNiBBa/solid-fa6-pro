
import { Icon } from "../../index";

/**
 * A component that renders the `file-image` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=sharp-light file-image}
 * @preview ![file-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-image.svg)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM120 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm104.4 2.5l-13.7 20.6-37.2 55.8-18.2-18.2-13.2-13.2-11 15.1-64 88L64 410.8l0 5.2 0 16 0 16 16 0 224 0 16 0 0-16 0-16 0-4.6-2.4-3.9-80-128-13.1-21zm-.9 59L285.1 416 99.8 416l46.1-63.4 18.8 18.8 13.8 13.8 10.8-16.2 34.3-51.4z" />
    </Icon>
);

export default FileImage;