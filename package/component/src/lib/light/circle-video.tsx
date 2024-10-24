
import { Icon } from "../../index";

/**
 * A component that renders the `circle-video` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-video?s=light circle-video}
 * @preview ![circle-video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-video.svg)
 */
const CircleVideo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-320l0 32 0 64 0 32-128 0 0-128 128 0zm32 9.8l0-9.8c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-9.8 74.9 25c4.9 1.6 10.2 .8 14.4-2.2s6.6-7.8 6.6-13l0-128c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2l-74.9 25zm0 33.7l64-21.3 0 83.6-64-21.3 0-40.9z" />
    </Icon>
);

export default CircleVideo;