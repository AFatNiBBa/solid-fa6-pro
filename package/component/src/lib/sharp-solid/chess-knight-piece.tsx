
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight-piece` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=sharp-solid chess-knight-piece}
 * @preview ![chess-knight-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-knight-piece.svg)
 */
const ChessKnightPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M57.6 102.4L32 128l0 120 38.4 32L160 222.4l0 32L48 337.6 48 384l224 0 27.1-109.6c3.3-13.3 4.9-27 4.9-40.7C304 140 228 64 134.2 64L32 64l0 25.6 25.6 12.8zm19.2 54.4a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM0 477.4L0 512l320 0 0-34.6L276.1 416 43.9 416 0 477.4z" />
    </Icon>
);

export default ChessKnightPiece;