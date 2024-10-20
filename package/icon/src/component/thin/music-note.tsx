
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=thin music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M230 52.6L368 16.3l0 115.3c0 3.7-2.5 6.9-6 7.8L224 174.4l0-114.1c0-3.6 2.4-6.8 6-7.7zM224 432l0-241.3c.7 0 1.3-.1 2-.2l139.9-35.6c10.6-2.7 18.1-12.3 18.1-23.3l0-116.5C384 6.8 377.2 0 368.9 0c-1.3 0-2.6 .2-3.8 .5L225.9 37.1C215.3 39.9 208 49.4 208 60.3l0 330.4c-19.6-23.2-55.3-38.8-96-38.8C50.1 352 0 387.8 0 432s50.1 80 112 80s112-35.8 112-80zm-16 0c0 15.6-8.8 31.2-26.1 43.5C164.6 487.9 140 496 112 496s-52.6-8.1-69.9-20.5C24.8 463.2 16 447.6 16 432s8.8-31.2 26.1-43.5C59.4 376.1 84 368 112 368s52.6 8.1 69.9 20.5c17.3 12.3 26.1 28 26.1 43.5z" />
    </Icon>
);

export default MusicNote;