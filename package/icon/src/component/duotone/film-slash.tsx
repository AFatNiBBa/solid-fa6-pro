
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-slash?s=duotone film-slash}
 * @preview ![film-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/film-slash.svg)
 */
const FilmSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 146.4L64 416c0 35.3 28.7 64 64 64l359.4 0-87-68.5c-4.8 2.9-10.4 4.5-16.4 4.5l-128 0c-17.7 0-32-14.3-32-32l0-64c0-14.1 9.1-26.1 21.8-30.3l-71.1-56c.8 2 1.3 4.1 1.3 6.4l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c.9 0 1.9 .1 2.8 .2L64 146.4zM89.5 44.9C134.3 80 179.2 115.1 224 150.3l0-22.3c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-65.9 0c85.7 67.2 171.5 134.4 257.2 201.6c.5-3.1 .7-6.3 .7-9.6l0-320c0-35.3-28.7-64-64-64L128 32c-14.4 0-27.8 4.8-38.5 12.9zM112 368c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM464 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm0 128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default FilmSlash;