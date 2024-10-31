
import { Icon } from "../../index";

/**
 * A component that renders the `film-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-slash?s=regular film-slash}
 * @preview ![film-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/film-slash.svg)
 */
const FilmSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1L89.5 44.9C100.2 36.8 113.6 32 128 32l384 0c35.3 0 64 28.7 64 64l0 320c0 3.3-.2 6.5-.7 9.6l55.5 43.5c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2zM176 112.6L176 80l-41.6 0L176 112.6zM328.3 232l87.7 0 0-40 0-112L224 80l0 70.3L328.3 232zM528 388.5l0-44.5-56.8 0L528 388.5zM416 423.8L487.4 480 128 480c-35.3 0-64-28.7-64-64l0-269.6L152.3 216 112 216l0 80 64 0 0-61.3L233.5 280l-9.5 0 0 40 0 112 192 0 0-8.2zM176 344l-64 0 0 72c0 8.8 7.2 16 16 16l48 0 0-88zM464 80l0 88 64 0 0-72c0-8.8-7.2-16-16-16l-48 0zm64 136l-64 0 0 80 64 0 0-80z" />
    </Icon>
);

export default FilmSlash;