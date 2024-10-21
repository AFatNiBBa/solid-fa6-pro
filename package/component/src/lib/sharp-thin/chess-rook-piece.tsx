
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=sharp-thin chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 96l-8 0 0 8 0 128 0 2.9 1.9 2.2 38 45.6L49.5 384l16 0L72 280.5l.2-3.2-2-2.4L32 229.1 32 112l40 0 0 40 0 8 8 0 48 0 8 0 0-8 0-40 47.5 0 0 40 0 8 8 0 48.5 0 8 0 0-8 0-40 40 0 0 117.1-38.1 45.8-2 2.4 .2 3.2L254.5 384l16 0-6.3-101.3 38-45.6 1.9-2.2 0-2.9 0-128 0-8-8 0-56 0-8 0 0 8 0 40-32.5 0 0-40 0-8-8 0L128 96l-8 0 0 8 0 40-32 0 0-40 0-8-8 0L24 96zM44.3 416l-2.4 2.9-40 48L0 469.1 0 472l0 32 0 8 8 0 304 0 8 0 0-8 0-32 0-2.9-1.9-2.2-40-48-2.4-2.9-3.7 0L48 416l-3.7 0zm7.5 16l216.5 0L304 474.9l0 21.1L16 496l0-21.1L51.7 432zM160 224c-17.7 0-32 14.3-32 32l0 40 0 8 8 0 48 0 8 0 0-8 0-40c0-17.7-14.3-32-32-32zm-16 32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32-32 0 0-32z" />
    </Icon>
);

export default ChessRookPiece;