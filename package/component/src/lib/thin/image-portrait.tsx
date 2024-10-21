
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=thin image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L64 16zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM240 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 356.6c0 6.3 5.1 11.4 11.4 11.4l169.1 0c6.3 0 11.4-5.1 11.4-11.4c0-29-23.5-52.6-52.6-52.6l-86.9 0c-29 0-52.6 23.5-52.6 52.6zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM148.6 288l86.9 0c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4l-169.1 0C92.3 384 80 371.7 80 356.6c0-37.9 30.7-68.6 68.6-68.6z" />
    </Icon>
);

export default ImagePortrait;