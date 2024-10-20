
import { Icon } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=thin circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-336c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16l128 0zM160 160c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-18.8 60.7 18.2c1.4 .4 2.8 .6 4.3 .6c8.3 0 15-6.7 15-15l0-98c0-8.3-6.7-15-15-15c-1.5 0-2.9 .2-4.3 .6L320 210.8l0-18.8c0-17.7-14.3-32-32-32l-128 0zm160 67.6l64-19.2 0 95.3-64-19.2 0-56.9z" />
    </Icon>
);

export default CircleVideo;