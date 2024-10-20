
import { Icon } from "../../index";

/**
 * A component that renders the `photo-film` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=sharp-light photo-film}
 * @preview ![photo-film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/photo-film.svg)
 */
const PhotoFilm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 32L224 32l0 201.4 84.7-84.7L320 137.4l11.3 11.3L384 201.4 500.7 84.7 512 73.4l11.3 11.3L608 169.4 608 32zm32 176c0 0 0 0 0 .1l0 112 0 32-32 0-336 0c0 0 0 0 0 0l-48 0-32 0 0-32 0-48s0 0 0 0l0-240 0-32 32 0L608 0l32 0 0 32 0 176zm-32 6.7l-96-96L395.3 235.3 310.6 320 608 320l0-105.4zM265.4 320l96-96L320 182.6l-96 96 0 41.4 41.4 0zM296 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM128 160l32 0 0 32-32 0 0 80 0 128 0 80 256 0 0-96 32 0 0 96 64 0 0-96 32 0 0 96 0 32-32 0-64 0-16 0-16 0-256 0-16 0-16 0-64 0L0 512l0-32L0 192l0-32 32 0 64 0 16 0 16 0zM96 192l-64 0 0 64 64 0 0-64zM32 480l64 0 0-64-64 0 0 64zm64-96l0-96-64 0 0 96 64 0z" />
    </Icon>
);

export default PhotoFilm;