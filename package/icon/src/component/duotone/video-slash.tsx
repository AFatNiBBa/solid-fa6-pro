
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-slash?s=duotone video-slash}
 * @preview ![video-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/video-slash.svg)
 */
const VideoSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 128l0 256c0 35.3 28.7 64 64 64l256 0c23.4 0 43.9-12.6 55-31.3L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5zm81.9-64L416 300.8 416 128c0-35.3-28.7-64-64-64L113.9 64zM448 174.9l0 17.1 0 128 0 5.8 96.4 75.6 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2l0-256c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default VideoSlash;