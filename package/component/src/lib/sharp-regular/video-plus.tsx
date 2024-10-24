
import { Icon } from "../../index";

/**
 * A component that renders the `video-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-plus?s=sharp-regular video-plus}
 * @preview ![video-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/video-plus.svg)
 */
const VideoPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M336 112l0 288L48 400l0-288 288 0zM48 64L0 64l0 48L0 400l0 48 48 0 288 0 48 0 0-48 0-48 0-192 0-48 0-48-48 0L48 64zM528 370.3l-112-56 0 53.7 112 56 48 24 0-53.7 0-276.7L576 64 528 88 416 144l0 53.7 112-56 0 228.7zM216 184l0-24-48 0 0 24 0 48-48 0-24 0 0 48 24 0 48 0 0 48 0 24 48 0 0-24 0-48 48 0 24 0 0-48-24 0-48 0 0-48z" />
    </Icon>
);

export default VideoPlus;