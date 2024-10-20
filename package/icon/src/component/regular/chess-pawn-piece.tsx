
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=regular chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm73.4 144c12.6-.7 22.6-11.2 22.6-24c0-9.7-5.8-18.1-14.1-21.9c8.9-14.6 14.1-31.8 14.1-50.1c0-53-43-96-96-96s-96 43-96 96c0 18.4 5.2 35.5 14.1 50.1C37.8 245.9 32 254.3 32 264c0 12.8 10 23.3 22.6 24l-3.6 64 48.1 0 3.6-64 25.3 0 25.3 0 3.6 64 48.1 0-3.6-64zM52.7 464l16.6-32 117.6 0 16.6 32L52.7 464zm143.9-80l-137 0c-12 0-22.9 6.7-28.4 17.3L4.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C0 493.8 18.2 512 40.8 512l174.5 0c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2c-5.5-10.6-16.5-17.3-28.4-17.3z" />
    </Icon>
);

export default ChessPawnPiece;