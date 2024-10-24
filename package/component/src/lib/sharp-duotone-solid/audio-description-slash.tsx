
import { Icon, generic } from "../../index";

/**
 * A component that renders the `audio-description-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description-slash?s=sharp-duotone-solid audio-description-slash}
 * @preview ![audio-description-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/audio-description-slash.svg)
 */
const AudioDescriptionSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 480l455.4 0L320 348.1l1.7 3.9-52.2 0-10.3-24.2-70.4 0L178.5 352l-52.2 0 49.9-117.1L32 121.2zM70.5 32C159 100.7 247.5 169.4 336 238.1l0-54.1 0-24 24 0 56 0c53 0 96 43 96 96c0 35-18.7 65.7-46.8 82.4L608 449.3 608 32 70.5 32zM205.9 287.8l36.3 0-.7-1.6-26.1-20.6-9.5 22.2zM384 208l0 67.4c12.2 9.5 24.4 19 36.6 28.4C445 301.5 464 281 464 256c0-26.5-21.5-48-48-48l-32 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default AudioDescriptionSlash;