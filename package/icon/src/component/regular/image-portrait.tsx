
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=regular image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16zm0-48c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 356.6c0-37.9 30.7-68.6 68.6-68.6l86.9 0c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4l-169.1 0C92.3 384 80 371.7 80 356.6z" />
    </Icon>
);

export default ImagePortrait;