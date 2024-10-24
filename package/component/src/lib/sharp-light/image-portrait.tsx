
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=sharp-light image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-448L32 32zM0 0L32 0 352 0l32 0 0 32 0 448 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM224 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM124.4 352l135.2 0-10.7-32-113.9 0-10.7 32zM272 288l21.3 64L304 384l-33.7 0-156.5 0L80 384l10.7-32L112 288l80 0 80 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default ImagePortrait;