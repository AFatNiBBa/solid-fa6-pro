
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=solid chess-rook}
 * @preview ![chess-rook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-rook.svg)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 192L32 48c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 40c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-40c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 40c0 4.4 3.6 8 8 8l32 0c4.4 0 8-3.6 8-8l0-40c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 144c0 10.1-4.7 19.6-12.8 25.6L352 256l16 144L80 400 96 256 44.8 217.6C36.7 211.6 32 202.1 32 192zm176 96l32 0c8.8 0 16-7.2 16-16l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432l320 0 41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6L38.6 512C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z" />
    </Icon>
);

export default ChessRook;