
import { Icon } from "../../index";

/**
 * A component that renders the `photo-film` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=thin photo-film}
 * @preview ![photo-film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/photo-film.svg)
 */
const PhotoFilm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 16c-26.5 0-48 21.5-48 48l0 196.7 95-95c9.4-9.4 24.6-9.4 33.9 0l47 47 111-111c9.4-9.4 24.6-9.4 33.9 0l95 95L624 64c0-26.5-21.5-48-48-48L256 16zM208 283.3l0 4.7c0 26.5 21.5 48 48 48l4.7 0 112-112-47-47c-3.1-3.1-8.2-3.1-11.3 0L208 283.3zM283.3 336L576 336c26.5 0 48-21.5 48-48l0-68.7L517.7 113c-3.1-3.1-8.2-3.1-11.3 0L389.7 229.7 283.3 336zM192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224zm96 8a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm40 24a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zM128 160l32 0 0 16-32 0 0 80 0 80 0 72 0 88 256 0 0-88 0-24 16 0 0 16 64 0 0-16 16 0 0 16 0 8 0 8 0 32c0 35.3-28.7 64-64 64l-16 0-8 0-8 0-256 0-8 0-8 0-48 0c-35.3 0-64-28.7-64-64l0-32 0-8 0-8 0-56 0-8 0-8 0-64 0-8 0-8 0-24c0-35.3 28.7-64 64-64l48 0 8 0 8 0zM112 400l0-56-96 0 0 56 96 0zm0 16l-96 0 0 32c0 26.5 21.5 48 48 48l48 0 0-80zm288 80l16 0c26.5 0 48-21.5 48-48l0-32-64 0 0 80zM112 176l-48 0c-26.5 0-48 21.5-48 48l0 24 96 0 0-72zM16 264l0 64 96 0 0-64-96 0z" />
    </Icon>
);

export default PhotoFilm;