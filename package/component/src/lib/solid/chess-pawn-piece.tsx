
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=solid chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M176 240c19.4-14.6 32-37.8 32-64c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64l-8 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l5.7 0L64 384l128 0-13.7-96 5.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0zM4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416 4.8 473.6z" />
    </Icon>
);

export default ChessPawnPiece;