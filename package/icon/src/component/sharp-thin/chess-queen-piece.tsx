
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=sharp-thin chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 32a32 32 0 1 1 64 0A32 32 0 1 1 96 32zM56 224l8 0 10.7 0L19.2 120.1 29.5 109c4.4 1.9 9.3 3 14.5 3c16.5 0 30.4-11.1 34.7-26.3l14.6-1.8c6.9 12 19.9 20.1 34.7 20.1s27.8-8.1 34.7-20.1l14.6 1.8c4.3 15.2 18.2 26.3 34.7 26.3c5.2 0 10.1-1.1 14.5-3l10.3 11.1L181.3 224l10.7 0 8 0 0 16-8 0-14.9 0 18.8 144-16.1 0L161 240l-66 0L76.2 384l-16.1 0L78.9 240 64 240l-8 0 0-16zm107.2 0l51.2-96.1c-.8 0-1.6 .1-2.4 .1c-18.7 0-35-9.8-44.2-24.6C157.7 113.6 143.6 120 128 120s-29.7-6.4-39.8-16.6C79 118.2 62.7 128 44 128c-.8 0-1.6 0-2.4-.1L92.8 224l70.4 0zM44.3 416l3.7 0 160 0 3.7 0 2.4 2.9 40 48 1.9 2.2 0 2.9 0 32 0 8-8 0L8 512l-8 0 0-8 0-32 0-2.9 1.9-2.2 40-48 2.4-2.9zm7.5 16L16 474.9 16 496l224 0 0-21.1L204.3 432 51.7 432z" />
    </Icon>
);

export default ChessQueenPiece;