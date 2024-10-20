
import { Icon } from "../../index";

/**
 * A component that renders the `video-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-plus?s=sharp-thin video-plus}
 * @preview ![video-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/video-plus.svg)
 */
const VideoPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M368 80l0 88 0 176 0 88L16 432 16 80l352 0zm16 352l0-80 0-17.9 0-156.2 0-17.9 0-80 0-16-16 0L16 64 0 64 0 80 0 432l0 16 16 0 352 0 16 0 0-16zm176-9.9l-144-72 0 17.9 144 72 16 8 0-17.9 0-348.2L576 64l-16 8L416 144l0 17.9 144-72 0 332.2zM200 168l0-8-16 0 0 8 0 80-80 0-8 0 0 16 8 0 80 0 0 80 0 8 16 0 0-8 0-80 80 0 8 0 0-16-8 0-80 0 0-80z" />
    </Icon>
);

export default VideoPlus;