
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=sharp-solid chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M152 24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM48 416l-4.1 0-2.4 3.4-40 56L0 477.4 0 480l0 24 0 8 8 0 240 0 8 0 0-8 0-24 0-2.6-1.5-2.1-40-56-2.4-3.4-4.1 0L48 416zM66.5 192L48 192l0 48 24 0 5.1 0L59.8 384l136.3 0L178.9 240l5.1 0 24 0 0-48-18.5 0L240 92 219 78l-4.6 4.6c-6 6-14.5 10.3-22.3 7.1c-11-4.5-15-15.1-15-25.7l-28 0s0 21-21 21s-21-21-21-21L79 64c0 10.6-4 21.2-15 25.7c-7.8 3.2-16.3-1.1-22.3-7.1L37 78 16 92 66.5 192z" />
    </Icon>
);

export default ChessQueenPiece;