
import { Icon, generic } from "../../index";

/**
 * A component that renders the `audio-description-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description-slash?s=duotone audio-description-slash}
 * @preview ![audio-description-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/audio-description-slash.svg)
 */
const AudioDescriptionSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 416c0 35.3 28.7 64 64 64l391.4 0L314.3 343.6c-2 2.4-4.6 4.4-7.5 5.9c-11.9 5.9-26.3 1.1-32.2-10.7l-9.4-18.9-82.2 0-9.4 18.9c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l42.5-85L32 121.2zM76.8 34.9C163.2 102.6 249.6 170.3 336 238l0-54c0-13.3 10.7-24 24-24l56 0c53 0 96 43 96 96c0 35.3-19 66.1-47.4 82.8C510 374.4 555.4 410 600.8 445.6c4.6-8.8 7.2-18.9 7.2-29.6l0-320c0-35.3-28.7-64-64-64L96 32c-6.7 0-13.1 1-19.2 2.9zM202.9 279.8l30.4 0-21.8-17.2-8.6 17.2zM384 208l0 67.7c12 9.4 24 18.8 35.9 28.2c24.7-2 44.1-22.7 44.1-47.8c0-26.5-21.5-48-48-48l-32 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default AudioDescriptionSlash;