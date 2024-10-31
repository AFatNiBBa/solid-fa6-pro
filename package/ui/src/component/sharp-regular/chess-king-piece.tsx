
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=sharp-regular chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 16l0-16L112 0l0 16 0 16L96 32 80 32l0 32 16 0 16 0 0 32L72 96 24 96l0 40 3.1 8 24.6 64L32 208l0 48 24 0 5.8 0L48.7 352l48.4 0 13.1-96 35.5 0 13.1 96 48.4 0-13.1-96 5.8 0 24 0 0-48-19.7 0 24.6-64 3.1-8 0-40-48 0-40 0 0-32 16 0 16 0 0-32-16 0-16 0 0-16zm8.9 192l-49.8 0L78.5 144l99 0-24.6 64zM53.8 464l17.8-32 112.9 0 17.8 32L53.8 464zM256 461.9L212.7 384 43.3 384 0 461.9 0 464l0 48 48 0 160 0 48 0 0-48 0-2.1z" />
    </Icon>
);

export default ChessKingPiece;