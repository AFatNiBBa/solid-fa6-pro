
import { Icon } from "../../index";

/**
 * A component that renders the `music-note-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note-slash?s=solid music-note-slash}
 * @preview ![music-note-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/music-note-slash.svg)
 */
const MusicNoteSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 32c0-9.9-4.5-19.2-12.3-25.2S481.8-1.4 472.2 1l-128 32C330 36.5 320 49.3 320 64l0 64 0 97.5L38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L384 275.7 384 153 487.8 127C502 123.5 512 110.7 512 96l0-64zM272 352c-61.9 0-112 35.8-112 80s50.1 80 112 80s112-35.8 112-80l0-20.8L317.8 359c-14-4.5-29.5-7-45.8-7z" />
    </Icon>
);

export default MusicNoteSlash;