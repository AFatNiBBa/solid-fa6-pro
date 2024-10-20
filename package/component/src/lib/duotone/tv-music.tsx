
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tv-music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv-music?s=duotone tv-music}
 * @preview ![tv-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tv-music.svg)
 */
const TvMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zm64 0l0 288 512 0 0-288L64 64zM96 480c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32z" />
        <path d="M576 64L64 64l0 288 512 0 0-288zM416 112l0 40 0 104c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-50.7-96 36 0 76.9c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-57.8 0-40c0-6.7 4.1-12.6 10.4-15l128-48c4.9-1.8 10.4-1.2 14.7 1.8s6.9 7.9 6.9 13.2z" />
    </Icon>
);

export default TvMusic;