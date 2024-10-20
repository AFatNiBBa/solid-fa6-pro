
import { Icon } from "../../index";

/**
 * A component that renders the `video-arrow-up-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-arrow-up-right?s=regular video-arrow-up-right}
 * @preview ![video-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/video-arrow-up-right.svg)
 */
const VideoArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 112c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l256 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-33 0-190 0-33c0-35.3-28.7-64-64-64L64 64zm464 84.6l0 214.7L416 313l0 52.6 104.3 46.9c5.1 2.3 10.6 3.5 16.2 3.5c21.8 0 39.5-17.7 39.5-39.5l0-241c0-21.8-17.7-39.5-39.5-39.5c-5.6 0-11.1 1.2-16.2 3.5L416 146.4l0 52.6 112-50.4zM152 160c-13.3 0-24 10.7-24 24s10.7 24 24 24l54.1 0L103 311c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l103-103 0 54.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-112 0z" />
    </Icon>
);

export default VideoArrowUpRight;