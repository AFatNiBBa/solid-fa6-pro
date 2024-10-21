
import { Icon } from "../../index";

/**
 * A component that renders the `photo-film` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/photo-film?s=regular photo-film}
 * @preview ![photo-film](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/photo-film.svg)
 */
const PhotoFilm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 48c-8.8 0-16 7.2-16 16l0 224c0 8.7 6.9 15.8 15.6 16l69.1-94.2c4.5-6.2 11.7-9.8 19.4-9.8s14.8 3.6 19.4 9.8L380 232.4l56-85.6c4.4-6.8 12-10.9 20.1-10.9s15.7 4.1 20.1 10.9L578.7 303.8c7.6-1.3 13.3-7.9 13.3-15.8l0-224c0-8.8-7.2-16-16-16L256 48zM192 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224zm-56 64l24 0 0 48 0 88 0 112 0 8 0 80 192 0 0-80 48 0 0 80 48 0c8.8 0 16-7.2 16-16l0-64 48 0 0 64c0 35.3-28.7 64-64 64l-48 0-24 0-24 0-192 0-24 0-24 0-48 0c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l48 0 24 0zm-24 48l-48 0c-8.8 0-16 7.2-16 16l0 48 64 0 0-64zm0 288l0-64-64 0 0 48c0 8.8 7.2 16 16 16l48 0zM48 352l64 0 0-64-64 0 0 64zM304 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default PhotoFilm;