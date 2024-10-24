
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tv-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv-music?s=sharp-duotone-solid tv-music}
 * @preview ![tv-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tv-music.svg)
 */
const TvMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 0 576 0l64 0 0 64 0 288 0 64-64 0L64 416 0 416l0-64L0 64 0 0zM64 64l0 288 512 0 0-288L64 64zM96 448l32 0 384 0 32 0 0 64-32 0-384 0-32 0 0-64z" />
        <path d="M576 64L64 64l0 288 512 0 0-288zM416 112l0 40 0 104c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-50.7-96 36 0 76.9c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-57.8 0-40 0-11.1 10.4-3.9 128-48L416 88.9l0 23.1z" />
    </Icon>
);

export default TvMusic;