
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=sharp-thin music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 128l0 59.1 144-39.3 0-126.8L224 60.2l0 67.8zm-16 0l0-80L368 4.4 384 0l0 16.6L384 160 224 203.6 224 432c0 44.2-50.1 80-112 80S0 476.2 0 432s50.1-80 112-80c40.7 0 76.4 15.5 96 38.8L208 208l0-16.6 0-63.4zM181.9 388.5C164.6 376.1 140 368 112 368s-52.6 8.1-69.9 20.5C24.8 400.8 16 416.4 16 432s8.8 31.2 26.1 43.5C59.4 487.9 84 496 112 496s52.6-8.1 69.9-20.5c17.3-12.3 26.1-28 26.1-43.5s-8.8-31.2-26.1-43.5z" />
    </Icon>
);

export default MusicNote;