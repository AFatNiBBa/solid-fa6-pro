
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=solid chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16L96 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 32L60.2 96C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208 72 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l4 0L60 384l136 0L180 256l4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-1.8 0 32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2L144 96l0-32 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416z" />
    </Icon>
);

export default ChessKingPiece;