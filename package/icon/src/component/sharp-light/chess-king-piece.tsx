
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=sharp-light chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 0l0 16 0 16 16 0 16 0 0 32-16 0-16 0 0 32 48 0 32 0 0 32 0 24-32.7 72 8.7 0 16 0 0 32-16 0-13.8 0 13.1 96L167 352l-13.1-96-51.8 0L89 352l-32.3 0 13.1-96L56 256l-16 0 0-32 16 0 8.7 0L32 152l0-24 0-32 32 0 48 0 0-32L96 64 80 64l0-32 16 0 16 0 0-16 0-16 32 0zM99.9 224l56.2 0L192 145.1l0-17.1-48 0-32 0-48 0 0 17.1L99.9 224zM32 480l192 0 0-16.7L191.2 416 64.8 416 32 463.3 32 480zM0 480l0-26.7L48 384l160 0 48 69.3 0 26.7 0 32-32 0L32 512 0 512l0-32z" />
    </Icon>
);

export default ChessKingPiece;