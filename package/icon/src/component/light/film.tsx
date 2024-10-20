
import { Icon } from "../../index";

/**
 * A component that renders the `film` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film?s=light film}
 * @preview ![film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/film.svg)
 */
const Film: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 448l0-96 0-80 256 0 0 80 0 96-256 0zM384 240l-256 0 0-80 0-96 256 0 0 96 0 80zM96 448l-32 0c-17.7 0-32-14.3-32-32l0-48 64 0 0 80zM32 272l64 0 0 64-64 0 0-64zm64-96l0 64-64 0 0-64 64 0zM96 64l0 80-64 0 0-48c0-17.7 14.3-32 32-32l32 0zM416 336l0-64 64 0 0 64-64 0zm0 112l0-80 64 0 0 48c0 17.7-14.3 32-32 32l-32 0zm0-272l64 0 0 64-64 0 0-64zm64-80l0 48-64 0 0-80 32 0c17.7 0 32 14.3 32 32zM448 32L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default Film;