
import { Icon } from "../../index";

/**
 * A component that renders the `video-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-slash?s=thin video-slash}
 * @preview ![video-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/video-slash.svg)
 */
const VideoSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM416 202.9l0-27.7 0-47.2c0-35.3-28.7-64-64-64L180.1 64l20.3 16L352 80c26.5 0 48 21.5 48 48l0 74.9 0 34.7 16 12.6 0-47.3zM48 128c0-1.7 .1-3.4 .3-5L34.1 111.8C32.7 117 32 122.4 32 128l0 256c0 35.3 28.7 64 64 64l256 0c26.4 0 49-16 58.8-38.8l-13.2-10.4C391.4 418.1 373.3 432 352 432L96 432c-26.5 0-48-21.5-48-48l0-256zM592 377.8c0 3.5-.8 6.7-2.2 9.6l12.7 10.1c3.5-5.8 5.5-12.5 5.5-19.7l0-243.6c0-21.1-17.1-38.2-38.2-38.2c-6.4 0-12.8 1.6-18.4 4.7L448 157.6l0 18.3 111.1-61.1c3.3-1.8 7-2.7 10.7-2.7c12.3 0 22.2 9.9 22.2 22.2l0 243.6z" />
    </Icon>
);

export default VideoSlash;