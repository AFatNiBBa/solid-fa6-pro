
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=sharp-light chess-rook}
 * @preview ![chess-rook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-rook.svg)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 32L32 32l0 16 0 152 0 7.4 5.6 4.8 50 42.9-5.1 97 32 0L120 248.8l.4-7.9-6-5.1L64 192.6 64 64l80 0 0 40 0 16 32 0 0-16 0-40 96 0 0 40 0 16 32 0 0-16 0-40 80 0 0 128.6-50.4 43.2-6 5.1 .4 7.9L333.5 352l32 0-5.1-97 50-42.9 5.6-4.8 0-7.4 0-152 0-16-16 0L48 32zM224 160c-26.5 0-48 21.5-48 48l0 64 0 16 16 0 64 0 16 0 0-16 0-64c0-26.5-21.5-48-48-48zm-16 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48-32 0 0-48zM64 480l0-9.5L97.8 416l252.4 0L384 470.5l0 9.5L64 480zm304-96L80 384 32 461.3 32 480l0 32 32 0 320 0 32 0 0-32 0-18.7L368 384z" />
    </Icon>
);

export default ChessRook;