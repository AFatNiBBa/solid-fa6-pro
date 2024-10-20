
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=sharp-thin chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 240a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm80-64c0 26.2-12.6 49.4-32 64l16 0 8 0 0 16-8 0-13.1 0 15.4 128-16.1 0L162.8 256 128 256l-34.8 0L77.9 384l-16.1 0L77.1 256 64 256l-8 0 0-16 8 0 16 0c-19.4-14.6-32-37.8-32-64c0-44.2 35.8-80 80-80s80 35.8 80 80zM48 416l160 0 3.7 0 2.4 2.9 40 48 1.9 2.2 0 2.9 0 32 0 8-8 0L8 512l-8 0 0-8 0-32 0-2.9 1.9-2.2 40-48 2.4-2.9 3.7 0zM16 474.9L16 496l224 0 0-21.1L204.3 432 51.7 432 16 474.9z" />
    </Icon>
);

export default ChessPawnPiece;