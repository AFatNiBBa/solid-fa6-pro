
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=thin chess-pawn-piece}
 * @preview ![chess-pawn-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chess-pawn-piece.svg)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 240a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm80-64c0 26.2-12.6 49.4-32 64l16 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-13.1 0 15.4 128-16.1 0L162.8 256 128 256l-34.8 0L77.9 384l-16.1 0L77.1 256 64 256c-4.4 0-8-3.6-8-8s3.6-8 8-8l16 0c-19.4-14.6-32-37.8-32-64c0-44.2 35.8-80 80-80s80 35.8 80 80zM56.2 416l143.5 0c7.8 0 15 3.7 19.5 10.1l32.2 45.1c2.9 4.1 4.5 8.9 4.5 13.9l0 2.9c0 13.3-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24l0-2.9c0-5 1.6-9.9 4.5-13.9l32.2-45.1c4.5-6.3 11.8-10.1 19.5-10.1zm-6.5 19.4L17.5 480.5c-1 1.4-1.5 3-1.5 4.6l0 2.9c0 4.4 3.6 8 8 8l208 0c4.4 0 8-3.6 8-8l0-2.9c0-1.7-.5-3.3-1.5-4.6l-32.2-45.1c-1.5-2.1-3.9-3.4-6.5-3.4L56.2 432c-2.6 0-5 1.2-6.5 3.4z" />
    </Icon>
);

export default ChessPawnPiece;