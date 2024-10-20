
import { Icon, generic } from "../../index";

/**
 * A component that renders the `photo-film` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=sharp-duotone-solid photo-film}
 * @preview ![photo-film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/photo-film.svg)
 */
const PhotoFilm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 0L640 0l0 352-128 0-160 0-160 0 0-160 0-64L192 0zm64 246.9c0 3 0 6.1 0 9.1c0 2.7 0 5.3 0 8c0 8 0 16 0 24l24 0 56 0 24 0 48 0 24 0 120 0 24 0 0-24 0-8 0-7.6-4.4-6.2-96-136L456 78.4l-19.6 27.8-57.3 81.2c-5.7-6.4-11.4-12.9-17.1-19.3L344 147.9c-6 6.7-12 13.4-17.9 20.2c-21.3 24-42.7 48-64 72l-6.1 6.8zM272 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M475.6 106.2l96 136 4.4 6.2 0 7.6 0 8 0 24-24 0-120 0-24 0-48 0-24 0-56 0-24 0 0-24 0-8 0-9.1 6.1-6.8 64-72L344 147.9l17.9 20.2 17.1 19.3 57.3-81.2L456 78.4l19.6 27.8zM0 128l192 0 0 64-32 0 0 256 192 0 0-96 160 0 0 160L0 512 0 128zm104 64l-48 0 0 48 48 0 0-48zm0 104l-48 0 0 48 48 0 0-48zm0 104l-48 0 0 48 48 0 0-48zm304 48l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default PhotoFilm;