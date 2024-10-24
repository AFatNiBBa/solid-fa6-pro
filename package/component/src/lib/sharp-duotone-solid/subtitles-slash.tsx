
import { Icon, generic } from "../../index";

/**
 * A component that renders the `subtitles-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subtitles-slash?s=sharp-duotone-solid subtitles-slash}
 * @preview ![subtitles-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/subtitles-slash.svg)
 */
const SubtitlesSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 480l455.4 0L365.5 384 312 384l-24 0 0-48 16.6 0-60.9-48L152 288l-24 0 0-48 24 0 30.8 0L32 121.2zM70.5 32C175 113.1 279.5 194.2 384 275.4l0-35.4 24 0 80 0 24 0 0 48-24 0-80 0-7.7 0c20.6 16 41.2 32 61.8 48l25.9 0 24 0 0 38.7c32 24.8 64 49.7 96 74.5L608 32 70.5 32zM128 336l24 0 80 0 24 0 0 48-24 0-80 0-24 0 0-48z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default SubtitlesSlash;