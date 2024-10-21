
import { Icon } from "../../index";

/**
 * A component that renders the `music-note` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=regular music-note}
 * @preview ![music-note](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/music-note.svg)
 */
const MusicNote: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 31.1C384 13.9 370.1 0 352.9 0c-2.7 0-5.3 .3-7.9 1L193.9 40.8C183.3 43.6 176 53.1 176 64l0 302.3c-18.1-9-40.2-14.3-64-14.3C50.1 352 0 387.8 0 432s50.1 80 112 80s112-35.8 112-80l0-236.6 141.9-36.1C376.6 156.6 384 147 384 136l0-104.9zM176 432c0 2.6-1.4 9.4-12.7 17.5c-11.2 8-29.2 14.5-51.3 14.5s-40.1-6.5-51.3-14.5C49.4 441.4 48 434.6 48 432s1.4-9.4 12.7-17.5c11.2-8 29.2-14.5 51.3-14.5s40.1 6.5 51.3 14.5c11.3 8.1 12.7 14.9 12.7 17.5zM336 117.3L224 145.8l0-63.3L336 53l0 64.3z" />
    </Icon>
);

export default MusicNote;