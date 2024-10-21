
import { Icon } from "../../index";

/**
 * A component that renders the `video-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-plus?s=solid video-plus}
 * @preview ![video-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/video-plus.svg)
 */
const VideoPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm512 64c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L416 174.9l0 17.1 0 128 0 17.1 14.2 9.5 96 64c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2l0-256zM216 184l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default VideoPlus;