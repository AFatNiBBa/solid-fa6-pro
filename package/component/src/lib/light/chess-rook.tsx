
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=light chess-rook}
 * @preview ![chess-rook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-rook.svg)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 121.3c0 14 6.1 27.3 16.8 36.4L87.6 255l-5.1 97 32 0L120 248.8c.3-5-1.8-9.8-5.6-13L69.6 197.4c-3.5-3-5.6-7.5-5.6-12.1L64 64l80 0 0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 96 0 0 40c0 8.8 7.2 16 16 16s16-7.2 16-16l0-40 80 0 0 121.3c0 4.7-2 9.1-5.6 12.1l-44.8 38.4c-3.8 3.2-5.8 8-5.6 13L333.5 352l32 0-5.1-97 38.8-33.3c10.6-9.1 16.8-22.4 16.8-36.4L416 64c0-17.7-14.3-32-32-32L64 32zM224 160c-26.5 0-48 21.5-48 48l0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-64c0-26.5-21.5-48-48-48zm-16 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48-32 0 0-48zM97.8 416l252.4 0 32.7 52.7c.7 1.2 1.1 2.5 1.1 3.9c0 4.1-3.3 7.4-7.4 7.4L71.4 480c-4.1 0-7.4-3.3-7.4-7.4c0-1.4 .4-2.7 1.1-3.9L97.8 416zm252.4-32L97.8 384c-11.1 0-21.4 5.7-27.2 15.1L37.9 451.8C34.1 458 32 465.2 32 472.6C32 494.3 49.7 512 71.4 512l305.1 0c21.8 0 39.4-17.7 39.4-39.4c0-7.3-2.1-14.5-5.9-20.8l-32.7-52.7c-5.8-9.4-16.1-15.1-27.2-15.1z" />
    </Icon>
);

export default ChessRook;