
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=solid chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M67.4 384L80 264 49.4 233.4c-6-6-9.4-14.1-9.4-22.6L40 112c0-8.8 7.2-16 16-16l24 0c8.8 0 16 7.2 16 16l0 24c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-24c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 24c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-24c0-8.8 7.2-16 16-16l24 0c8.8 0 16 7.2 16 16l0 98.7c0 8.5-3.4 16.6-9.4 22.6L240 264l12.6 120L67.4 384zM136 280.9c0 3.9 3.2 7.1 7.1 7.1l33.8 0c3.9 0 7.1-3.2 7.1-7.1l0-32.9c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 32.9zM20.8 473.6L64 416l192 0 43.2 57.6c3.1 4.2 4.8 9.2 4.8 14.4c0 13.3-10.7 24-24 24L40 512c-13.3 0-24-10.7-24-24c0-5.2 1.7-10.2 4.8-14.4z" />
    </Icon>
);

export default ChessRookPiece;