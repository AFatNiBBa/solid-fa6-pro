
import { Icon } from "../../index";

/**
 * A component that renders the `film-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-slash?s=light film-slash}
 * @preview ![film-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/film-slash.svg)
 */
const FilmSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM500.4 480L448 438.6l0 9.4-256 0 0-96 0-96 0-16-32 0-64 0 0-64 0-15.3L64 135.4 64 416c0 35.3 28.7 64 64 64l372.4 0zM139.6 32L192 73.4l0-9.4 256 0 0 96 0 96 0 16 32 0 64 0 0 64 0 15.3 32 25.3L576 96c0-35.3-28.7-64-64-64L139.6 32zM160 448l-32 0c-17.7 0-32-14.3-32-32l0-48 64 0 0 80zM96 272l64 0 0 64-64 0 0-64zm384-96l64 0 0 64-64 0 0-64zm0-32l0-80 32 0c17.7 0 32 14.3 32 32l0 48-64 0z" />
    </Icon>
);

export default FilmSlash;