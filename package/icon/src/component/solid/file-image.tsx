
import { Icon } from "../../index";

/**
 * A component that renders the `file-image` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-image?s=solid file-image}
 * @preview ![file-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/file-image.svg)
 */
const FileImage: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5s-8.2 8.6-14.2 8.6l-88 0-40 0-48 0-48 0c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2 .2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4 48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z" />
    </Icon>
);

export default FileImage;