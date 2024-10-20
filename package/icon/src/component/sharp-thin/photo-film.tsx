
import { Icon } from "../../index";

/**
 * A component that renders the `photo-film` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=sharp-thin photo-film}
 * @preview ![photo-film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/photo-film.svg)
 */
const PhotoFilm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 16l0 244.7L314.3 154.3l5.7-5.7 5.7 5.7L384 212.7 506.3 90.3l5.7-5.7 5.7 5.7L624 196.7 624 16 208 16zm0 267.3l0 52.7 52.7 0 112-112L320 171.3l-112 112zM283.3 336L624 336l0-116.7-112-112L389.7 229.7 283.3 336zM640 218.9L640 336l0 16-16 0-416 0-16 0 0-16 0-320 0-16 16 0L624 0l16 0 0 16 0 197.9c.5 1.6 .5 3.4 0 5zM288 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm40 24a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zM128 160l32 0 0 16-32 0 0 80 0 80 0 72 0 88 256 0 0-88 0-24 16 0 0 16 64 0 0-16 16 0 0 16 0 8 0 8 0 80 0 16-16 0-64 0-8 0-8 0-256 0-8 0-8 0-96 0L0 512l0-16 0-80 0-8 0-8 0-56 0-8 0-8 0-64 0-8 0-8 0-72 0-16 16 0 96 0 8 0 8 0zM112 416l-96 0 0 80 96 0 0-80zm0-16l0-56-96 0 0 56 96 0zm0-72l0-64-96 0 0 64 96 0zm0-80l0-72-96 0 0 72 96 0zM464 416l-64 0 0 80 64 0 0-80z" />
    </Icon>
);

export default PhotoFilm;