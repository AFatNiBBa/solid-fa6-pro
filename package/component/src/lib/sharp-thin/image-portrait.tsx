
import { Icon } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=sharp-thin image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 16l0 480 352 0 0-480L16 16zM0 0L16 0 368 0l16 0 0 16 0 480 0 16-16 0L16 512 0 512l0-16L0 16 0 0zM240 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM102.2 368l179.6 0-21.3-64-136.9 0-21.3 64zM272 288l26.7 80 5.3 16-16.9 0L96.9 384 80 384l5.3-16L112 288l160 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default ImagePortrait;