
import { Icon, generic } from "../../index";

/**
 * A component that renders the `subtitles-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subtitles-slash?s=duotone subtitles-slash}
 * @preview ![subtitles-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/subtitles-slash.svg)
 */
const SubtitlesSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 416c0 35.3 28.7 64 64 64l391.4 0L365.5 384 312 384c-13.3 0-24-10.7-24-24c0-11.1 7.5-20.4 17.7-23.2l-62-48.8L152 288c-13.3 0-24-10.7-24-24s10.7-24 24-24l30.8 0L32 121.2zM76.8 34.9c105.3 82.5 210.5 165 315.8 247.5c-5.3-4.4-8.6-11-8.6-18.4c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-5.3 0-10.2-1.7-14.2-4.6c22.4 17.5 44.7 35.1 67.1 52.6l27 0c13.3 0 24 10.7 24 24c0 4.8-1.4 9.3-3.8 13c30.9 24.2 61.7 48.4 92.6 72.6c4.6-8.8 7.2-18.9 7.2-29.6l0-320c0-35.3-28.7-64-64-64L96 32c-6.7 0-13.1 1-19.2 2.9zM128 360c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default SubtitlesSlash;